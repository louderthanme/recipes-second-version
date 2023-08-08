import { useEffect } from 'react';

export const updateBoxShadow = (container) => {
  if (container) {
    const hasOverflow = container.scrollHeight > container.clientHeight;
    container.style.boxShadow = hasOverflow ? 'inset 0px -5px 5px -5px rgba(0, 0, 0, 0.5)' : 'none';
  }
};

export const useDebounceEffect = (effect, dependencies, delay = 100) => {
  useEffect(() => {
    let timeout;
    const debouncedEffect = () => {
      clearTimeout(timeout);
      timeout = setTimeout(effect, delay);
    };
    debouncedEffect(); // Call the effect initially

    return () => {
      clearTimeout(timeout);
    };
  }, dependencies);
};


export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}