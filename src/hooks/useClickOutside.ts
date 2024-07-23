import { useEffect, useRef } from 'react';

type Handler = () => void;

const useClickOutside = <T extends HTMLElement>(handler: Handler) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    
  }, [handler]);

  return ref;
};

export default useClickOutside;
