import { useEffect } from 'react';
import { set } from 'react-hook-form';

export const updateBoxShadow = (container) => {
  if (container) {
    const hasOverflow = container.scrollHeight > container.clientHeight;
    container.style.boxShadow = hasOverflow ? 'inset 0px -5px 10px -4px rgba(0, 0, 0, 0.5)' : 'none';
  }
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
  let transformation = '';

  if (height > width) {
    // Vertical (portrait) image
    transformation = `h_${height},c_fill,g_auto`;
  } else {
    // Horizontal (landscape) image
    transformation = `h_${height},w_${width},c_fill,g_auto`;
  }

  transformation += '/q_auto,f_auto';

  segments.splice(-2, 0, transformation);
  return segments.join('/');
};

export const transformImages = (urls, height, width) => {
  return urls.map(url => transformImage(url, height, width));
};
