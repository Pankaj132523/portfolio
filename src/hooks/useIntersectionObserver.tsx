import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  }
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return { elementRef, isVisible };
}; 