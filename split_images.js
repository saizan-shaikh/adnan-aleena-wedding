import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\bdf798ab-9fd3-4815-bbdb-7ab3c3dbe95c\\media__1789096504597.jpg';
const outputDir = path.join(__dirname, 'public', 'assets', 'images');

async function splitImage() {
  try {
    const metadata = await sharp(inputFile).metadata();
    
    const cols = 3;
    const rows = 2;
    
    const width = Math.floor(metadata.width / cols);
    const height = Math.floor(metadata.height / rows);

    // There are small white borders/gutters between the images. Let's crop slightly inwards.
    // Given the image width is e.g. 1536, 1% is 15px.
    const gutterX = Math.floor(metadata.width * 0.008);
    const gutterY = Math.floor(metadata.height * 0.008);
    
    const cropWidth = width - (gutterX * 2);
    const cropHeight = height - (gutterY * 2);

    let idx = 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const outPath = path.join(outputDir, `photo${idx}.jpg`);
        
        await sharp(inputFile)
          .extract({
            left: (c * width) + gutterX,
            top: (r * height) + gutterY,
            width: cropWidth,
            height: cropHeight
          })
          .toFile(outPath);
          
        console.log(`Saved ${outPath}`);
        idx++;
      }
    }
  } catch (err) {
    console.error(err);
  }
}

splitImage();
