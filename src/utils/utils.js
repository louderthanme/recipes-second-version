import { useEffect } from 'react';
import { set } from 'react-hook-form';

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

export const capitalize = (string) => {
  return string.toUpperCase();
}

export const getPublicIdFromCloudinaryUrl = (url) => {
  const splitUrl = url.split('/');
  const lastSegment = splitUrl.pop() || '';
  const publicId = lastSegment.split('.')[0];
  return publicId;
};

export const transformImage = (url, height, width) => {
  const segments = url.split('/');
  let transformation = `h_${height}`;

  if (width) {
    transformation += `,w_${width},c_fill,g_auto`;
  }

  segments.splice(-2, 0, transformation);
  return segments.join('/');
};

