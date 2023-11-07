// Importing the necessary React hook and components.
import { useState } from "react";
import ShareWindowPortal from "../components/ui/share-window-portal/share-window-portal.component";
import ShareWindow from "../components/ui/share-window/share-window.component";

// This is a custom hook named useShareWindow that takes a 'recipe' object as a parameter.
export const useShareWindow = (recipe) => {
  // useState hook is used to handle the visibility and position (x, y) of the ShareWindow.
  const [showShareWindow, setShowShareWindow] = useState({ show: false });

  // This function is triggered when the share button is clicked.
  const handleShareClick = (e) => {
    e.stopPropagation();  
    // Gets the bounding client rect of the button that triggered the event to position the ShareWindow.
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    // Updates the state to toggle the visibility of the ShareWindow and set its position.
    setShowShareWindow(prevState => ({ show: !prevState.show, x, y }));
  };

  // This function is used to close the ShareWindow and set its visibility to false.
  const closeShareWindow = () => {
    setShowShareWindow({ show: false });
  };

  // ShareWindowComponent is a functional component that renders the ShareWindowPortal with ShareWindow inside it.
  // It only renders if showShareWindow.show is true, indicating that the window should be visible.
  const ShareWindowComponent = () => (
    showShareWindow.show && (
      <ShareWindowPortal x={showShareWindow.x} y={showShareWindow.y}>
        <ShareWindow onClose={closeShareWindow} recipe={recipe}/>
      </ShareWindowPortal>
    )
  );

  // The hook returns the handleShareClick function and the ShareWindowComponent for use in UI components.
  return [handleShareClick, ShareWindowComponent];
};
