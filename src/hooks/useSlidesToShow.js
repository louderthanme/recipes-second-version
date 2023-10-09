// hooks/useSlidesToShow.js
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';

const useSlidesToShow = () => {
    const [slidesToShow, setSlidesToShow] = useState(4);
    const theme = useTheme();
    
    useEffect(() => {
        const updateSlidesToShow = () => {
            const width = window.innerWidth;
    
            if (width <= theme.breakpoints.values.sm) {
                setSlidesToShow(1);
            } else if (width <= theme.breakpoints.values.md) {
                setSlidesToShow(2);
            } else if (width <= theme.breakpoints.values.lg) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(4);
            }
        };
    
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
    
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, [theme.breakpoints]);

    return slidesToShow;
};

export default useSlidesToShow;
