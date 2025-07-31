import { useEffect } from 'react';

const ImagePreloader = ({ images = [] }) => {
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => reject(src);
          img.src = src;
        });
      });

      try {
        await Promise.allSettled(imagePromises);
        console.log('Images preloaded successfully');
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    if (images.length > 0) {
      // Preload images after a short delay to not block initial page load
      const timer = setTimeout(preloadImages, 1000);
      return () => clearTimeout(timer);
    }
  }, [images]);

  return null; // This component doesn't render anything
};

export default ImagePreloader; 