import { useState } from "react";

export const useShareWindow = () => {
    const [showShareWindow, setShowShareWindow] = useState(false);

    const toggleShareWindow = () => setShowShareWindow(!showShareWindow);

    return [showShareWindow, toggleShareWindow];
};

