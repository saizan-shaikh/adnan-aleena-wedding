const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const inputFile = 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\bdf798ab-9fd3-4815-bbdb-7ab3c3dbe95c\\media__1789096504597.jpg';
const outputDir = path.join(__dirname, 'public', 'assets', 'images');

async function splitImage() {
  try {
    const image = await Jimp.read(inputFile);
    
    // Determine the width and height of each grid item (assuming a 3x2 grid)
    const cols = 3;
    const rows = 2;
    
    // There are small white borders/gutters between the images. We might need to guess the gutter size or just do a raw divide.
    // Looking at the image visually, there are small white borders. Let's do a raw divide first, and then we can crop gutters if necessary.
    const width = Math.floor(image.bitmap.width / cols);
    const height = Math.floor(image.bitmap.height / rows);

    let idx = 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const outPath = path.join(outputDir, `photo${idx}.jpg`);
        // We clone the image to prevent mutating the original
        const clone = image.clone();
        
        // crop(x, y, w, h)
        // Adjusting slightly to avoid gutters, assuming gutter is ~1% of width
        const gutterX = Math.floor(image.bitmap.width * 0.005);
        const gutterY = Math.floor(image.bitmap.height * 0.005);
        
        clone.crop(
          c * width + gutterX, 
          r * height + gutterY, 
          width - gutterX * 2, 
          height - gutterY * 2
        );
        
        await clone.writeAsync(outPath);
        console.log(`Saved ${outPath}`);
        idx++;
      }
    }
  } catch (err) {
    console.error(err);
  }
}

splitImage();
