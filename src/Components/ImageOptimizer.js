import React, { useState, useEffect, useRef } from 'react';

const ImageOptimizer = ({ 
  src, 
  alt, 
  className, 
  placeholder = null,
  preload = false,
  priority = false,
  sizes = null,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(null);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // If priority is true, load immediately
    if (priority) {
      setIsInView(true);
      return;
    }

    // Set up intersection observer for lazy loading
    if (imgRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        },
        {
          rootMargin: '50px 0px', // Start loading 50px before image comes into view
          threshold: 0.1
        }
      );

      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  useEffect(() => {
    // Preload image if specified
    if (preload && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    }
  }, [preload, src]);

  useEffect(() => {
    if (isInView && src) {
      // Check if WebP is supported
      const checkWebPSupport = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      };

      const isWebPSupported = checkWebPSupport();
      
      // Try to use WebP if supported and available
      if (isWebPSupported && src.includes('.jpg')) {
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        setCurrentSrc(webpSrc);
      } else {
        setCurrentSrc(src);
      }
    }
  }, [isInView, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to original format if WebP fails
    if (currentSrc && currentSrc !== src) {
      setCurrentSrc(src);
    } else {
      setError(true);
    }
  };

  return (
    <div ref={imgRef} className={`image-optimizer-container ${className || ''}`}>
      {/* Placeholder */}
      {!isLoaded && placeholder && (
        <div className="image-placeholder">
          <img src={placeholder} alt="placeholder" className="placeholder-image" />
        </div>
      )}
      
      {/* Main image */}
      {isInView && !error && currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={`optimized-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          {...props}
        />
      )}
      
      {/* Error fallback */}
      {error && (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default ImageOptimizer; 