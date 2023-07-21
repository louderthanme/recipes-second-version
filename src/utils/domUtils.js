export const updateBoxShadow = (container) => {
    if (container) {
      const hasOverflow = container.scrollHeight > container.clientHeight;
      container.style.boxShadow = hasOverflow ? 'inset 0px -10px 10px -10px rgba(0, 0, 0, 0.5)' : 'none';
    }
  };
  