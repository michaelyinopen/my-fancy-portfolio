import { useRef, useEffect } from "react";

export function useLandingRef() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById('landing');
  }, []);
  return ref;
}

export function useJobShopCollectionRef() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById('job-shop-collection');
  }, []);
  return ref;
}

export function useJobShopSchedulerRef() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById('job-shop-scheduler');
  }, []);
  return ref;
}

export function useControlFlowPractiseRef() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = document.getElementById('control-flow-practise');
  }, []);
  return ref;
}