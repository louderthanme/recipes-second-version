// hooks/useShareWindow.js

import { useState } from "react";
import ShareWindowPortal from "../components/ui/share-window-portal/share-window-portal.component";
import ShareWindow from "../components/ui/share-window/share-window.component";

export const useShareWindow = () => {
  const [showShareWindow, setShowShareWindow] = useState(false);

  const handleShareClick = (e) => {
    e.stopPropagation();  
    const rect = e.currentTarget.getBoundingClientRect(); // change from e.target to e.currentTarget
    const x = rect.left;
    const y = rect.top;
    setShowShareWindow({ show: !showShareWindow.show, x, y });
  };

  const closeShareWindow = () => {
    setShowShareWindow({ show: false });
  };

  const ShareWindowComponent = () => (
    showShareWindow.show && (
      <ShareWindowPortal x={showShareWindow.x} y={showShareWindow.y}>
        <ShareWindow onClose={closeShareWindow}/>
      </ShareWindowPortal>
    )
  );

  return [handleShareClick, ShareWindowComponent];
};
