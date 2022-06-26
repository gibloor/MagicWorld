//don't used

import { useEffect, useState, useRef, RefObject } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    if (ref.current && observerRef.current) {
      observerRef.current.observe(ref.current);

      return () => {
        observerRef.current?.disconnect();
      };
    }
  }, [ref]);

  return isOnScreen;
}

// const elementRef = useRef<HTMLDivElement>(null);
// const isOnScreen = useOnScreen(elementRef);

// const [description, setDescription] = useState('');
// const [symbolId, setSymbolId] = useState(0);
// const [splitedD, setSplitedD] = useState<string[]>([]);

// const text = 'gachi boys in this magic way very like big fresh bottles with water';

// useEffect(() => {
//   setSplitedD(text.split(''));
// }, []);

// useEffect(() => {
//   if (isOnScreen && symbolId < splitedD.length) {
//     setTimeout(() => {
//       setDescription(description + splitedD[symbolId])
//       setSymbolId(symbolId + 1)
//     }, 25);
//   }
// }, [description, isOnScreen]);