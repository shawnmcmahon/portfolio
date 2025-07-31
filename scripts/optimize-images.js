const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
try {
  require('sharp');
} catch (error) {
  console.log('Installing sharp for image optimization...');
  execSync('npm install sharp', { stdio: 'inherit' });
}

const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, '../src/Assets');
const OPTIMIZED_DIR = path.join(__dirname, '../src/Assets/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
  jpeg: {
    quality: 80,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 80,
    compressionLevel: 9
  },
  webp: {
    quality: 80,
    effort: 6
  }
};

function optimizeImage(inputPath, outputPath, format = 'webp') {
  try {
    const image = sharp(inputPath);
    
    switch (format) {
      case 'webp':
        return image.webp(OPTIMIZATION_SETTINGS.webp).toFile(outputPath);
      case 'jpeg':
        return image.jpeg(OPTIMIZATION_SETTINGS.jpeg).toFile(outputPath);
      case 'png':
        return image.png(OPTIMIZATION_SETTINGS.png).toFile(outputPath);
      default:
        return image.webp(OPTIMIZATION_SETTINGS.webp).toFile(outputPath);
    }
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
  }
}

function processDirectory(dirPath, relativePath = '') {
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const relativeItemPath = path.join(relativePath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Create corresponding directory in optimized folder
      const optimizedSubDir = path.join(OPTIMIZED_DIR, relativeItemPath);
      if (!fs.existsSync(optimizedSubDir)) {
        fs.mkdirSync(optimizedSubDir, { recursive: true });
      }
      processDirectory(fullPath, relativeItemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      
      // Only process image files
      if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
        const optimizedPath = path.join(OPTIMIZED_DIR, relativeItemPath);
        const optimizedDir = path.dirname(optimizedPath);
        
        if (!fs.existsSync(optimizedDir)) {
          fs.mkdirSync(optimizedDir, { recursive: true });
        }
        
        // Convert to WebP for better compression
        const webpPath = optimizedPath.replace(ext, '.webp');
        console.log(`Optimizing: ${relativeItemPath} -> ${path.relative(OPTIMIZED_DIR, webpPath)}`);
        
        optimizeImage(fullPath, webpPath, 'webp');
        
        // Also create optimized version in original format
        optimizeImage(fullPath, optimizedPath, ext === '.png' ? 'png' : 'jpeg');
      }
    }
  });
}

console.log('Starting image optimization...');
processDirectory(ASSETS_DIR);
console.log('Image optimization complete!');
console.log(`Optimized images saved to: ${OPTIMIZED_DIR}`); 