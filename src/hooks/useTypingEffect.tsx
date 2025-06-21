import { useState, useEffect, useCallback } from 'react';

interface TypingOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const useTypingEffect = (
  texts: string[],
  options: TypingOptions = {}
) => {
  const {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1500
  } = options;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  const currentFullText = texts[currentTextIndex];

  const tick = useCallback(() => {
    if (isDeleting) {
      setCurrentText(prev => prev.slice(0, -1));
    } else {
      setCurrentText(prev => currentFullText.slice(0, prev.length + 1));
    }
  }, [currentFullText, isDeleting]);

  useEffect(() => {
    if (texts.length === 0) return;

    let timeout: number;

    if (!isDeleting && currentText === currentFullText) {
      // Finished typing - pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === '') {
      // Finished deleting - move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    } else {
      // Continue typing or deleting
      const delay = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(tick, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentFullText, isDeleting, tick, texts.length, typingSpeed, deletingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return {
    displayText: currentText,
    isBlinking,
    currentIndex: currentTextIndex,
    isDeleting
  };
}; 