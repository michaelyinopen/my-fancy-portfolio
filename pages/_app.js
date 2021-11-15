import '../styles/globals.css'

import { TransitionLayout } from '../shared/transition'
// import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Component {...pageProps} />
    </TransitionLayout>
  )
}

export default MyApp
