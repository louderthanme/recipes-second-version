import React from 'react';
import ReactDOM from 'react-dom';

// ShareWindowPortal creates a portal for rendering children components. It accepts children components to render, and coordinates (x, y) to position the portal.
const ShareWindowPortal = ({ children, x, y }) => {
  // Attempting to locate an existing DOM element to serve as the portal's container.
  const el = document.getElementById('share-window-portal');
  
  // If the element doesn't exist, don't render anything.
  if (!el) return null;

  // Defining the style for the portal, positioning it absolutely on the page according to x and y props.
  const style = {
    position: 'absolute',
    left: `${x}px`, // Position from the left of the viewport based on x coordinate.
    top: `${y}px`,  // Position from the top of the viewport based on y coordinate.
    zIndex: 1000,   // zIndex to ensure the portal floats above other elements.
  };

  // Utilizing ReactDOM.createPortal to render the children into the specified DOM node ('el'). This allows for the children to be rendered outside of their parent component's DOM hierarchy.
  return ReactDOM.createPortal(
    <div style={style}>
      {children} // The content to be rendered within the portal.
    </div>,
    el // The destination container in the DOM.
  );
};

export default ShareWindowPortal;
