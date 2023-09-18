import React from 'react';
import ReactDOM from 'react-dom';

const ShareWindowPortal = ({ children, x, y }) => {
  const el = document.getElementById('share-window-portal');
  
  if (!el) return null;

  const style = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <div style={style}>
      {children}
    </div>,
    el
  );
};

export default ShareWindowPortal;
