# my-fancy-portfolio deployment

## Setup Linode Server
  - https://www.linode.com/docs/guides/getting-started/
      - Host name my-fancy-portfolio
  - https://www.linode.com/docs/guides/securing-your-server/
      - create user michael
  - https://www.linode.com/docs/guides/how-to-deploy-a-react-app-on-debian-10/
      - Install Rsync
      - install nvm npm and yarn
      - install nginx
      - useful commnads
      ```
      sudo apt install rsync
      sudo apt install nginx
      
      sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
      sudo nginx -t
      sudo nginx -s reload
      ```

- https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/#installing-and-configuring-nvm
- https://www.linode.com/docs/guides/install-and-use-npm-on-linux/#how-to-install-npm
- https://www.linode.com/docs/guides/install-and-use-the-yarn-package-manager

## Continuous Deployment by Github Actions

Command to change right of the directory rsync copies to

```
sudo chmod 755 -R /var/www/example.com
sudo chown -R example_user /var/www/example.com
```

Generate ssh key pair. e.g. on Windows CMD

```
ssh-keygen -m PEM -t rsa -b 4096
```

Copy public key to /home/michael/.ssh/authorized_keys of server

```
mkdir -p ~/.ssh
```
Copy private key to https://github.com/michaelyinopen/my-fancy-portfolio/settings/secrets/actions as repository secret LINODE_SSH_PRIVATE_KEY.

Set other Github repository secrets

- LINODE_HOST
  - the public IP
- LINODE_PORT
  - 22
- LINODE_USER
- LINODE_DIRECTORY

This Github Action does

- Rsync the repository files to Linode
- npm install
- npm build Next.js app
- pm2 restart the application

## Setup pm2
Useful commands
```
npm i -g pm2
pm2 --version
pm2 start "npm run start -- -p 3001" --name nextjs
pm2 show nextjs
https://pm2.keymetrics.io/docs/tutorials/pm2-nginx-production-setup

pm2 logs nextjs --lines 1000
pm2 restart nextjs
```

To fix cannot find npm error
```
> sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
> sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"
> sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/pm2" "/usr/local/bin/pm2"

ssh michael@<IP> 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm --version'
```

To fix some build error
```
export NODE_OPTIONS=--openssl-legacy-provider
```
is added to the command in Github Actions

## Change domain
Add A and AAAA records.

## Reverse proxy api requests
Update /etc/nginx/sites-available/portfolio.michael-yin.net

```
upstream my_nodejs_upstream {
    server 127.0.0.1:3001;
    keepalive 64;
}

server {
    listen 80;
    listen [::]:80;
    server_name  portfolio.michael-yin.net;

    root /var/www/portfolio.michael-yin.net;
    index index.html;

     location / {
    	 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Real-IP $remote_addr;
    	 proxy_set_header Host $http_host;
         
    	 proxy_http_version 1.1;
    	 proxy_set_header Upgrade $http_upgrade;
    	 proxy_set_header Connection "upgrade";
         
     	 proxy_pass http://my_nodejs_upstream/;
     	 proxy_redirect off;
         proxy_read_timeout 240s;
    }
}
```

## Https
The website uses free SSL certificate issued by Let's Encrypt.
Follow instructions in https://certbot.eff.org/lets-encrypt/debianbuster-nginx.

## http2

Manually edited these two lines to support http2
```
    listen [::]:443 ssl http2 ipv6only=on; # managed by Certbot
    listen 443 ssl http2; # managed by Certbot
```