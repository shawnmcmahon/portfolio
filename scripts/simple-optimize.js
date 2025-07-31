const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../src/Assets');

// Simple image optimization by copying and renaming for better organization
function optimizeImages() {
  console.log('Starting simple image optimization...');
  
  // Create optimized directory structure
  const optimizedDir = path.join(ASSETS_DIR, 'optimized');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  // Copy and organize images
  function processDirectory(dirPath, relativePath = '') {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const relativeItemPath = path.join(relativePath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && item !== 'optimized' && item !== 'icons' && item !== 'fonts') {
        // Create corresponding directory in optimized folder
        const optimizedSubDir = path.join(optimizedDir, relativeItemPath);
        if (!fs.existsSync(optimizedSubDir)) {
          fs.mkdirSync(optimizedSubDir, { recursive: true });
        }
        processDirectory(fullPath, relativeItemPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        
        // Only process image files
        if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
          const optimizedPath = path.join(optimizedDir, relativeItemPath);
          const optimizedDirPath = path.dirname(optimizedPath);
          
          if (!fs.existsSync(optimizedDirPath)) {
            fs.mkdirSync(optimizedDirPath, { recursive: true });
          }
          
          // Copy the image
          fs.copyFileSync(fullPath, optimizedPath);
          console.log(`Copied: ${relativeItemPath}`);
        }
      }
    });
  }

  processDirectory(ASSETS_DIR);
  console.log('Simple image optimization complete!');
  console.log(`Images organized in: ${optimizedDir}`);
  console.log('\nRecommendations for manual optimization:');
  console.log('1. Use online tools like TinyPNG or Squoosh to compress images');
  console.log('2. Convert images to WebP format for better compression');
  console.log('3. Resize images to appropriate dimensions');
  console.log('4. Consider using responsive images with srcset');
}

optimizeImages(); 