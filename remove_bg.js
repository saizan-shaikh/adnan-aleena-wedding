import sharp from 'sharp';
import fs from 'fs';

const filesToProcess = [
  {
    input: 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\bdf798ab-9fd3-4815-bbdb-7ab3c3dbe95c\\top_floral_corner_1789142518340.png',
    output: 'D:\\React - JS\\Wedding-Card\\public\\assets\\images\\top-floral-corner.png'
  },
  {
    input: 'C:\\Users\\admin\\.gemini\\antigravity\\brain\\bdf798ab-9fd3-4815-bbdb-7ab3c3dbe95c\\bottom_floral_guldasta_1789142542859.png',
    output: 'D:\\React - JS\\Wedding-Card\\public\\assets\\images\\bottom-floral-guldasta.png'
  }
];

async function removeWhiteBackground(inputFile, outputFile) {
  try {
    const { data, info } = await sharp(inputFile)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0; 
      } else if (r > 215 && g > 215 && b > 215) {
        const maxDist = 255 - Math.min(r, g, b);
        data[i + 3] = Math.max(0, Math.floor((maxDist / 40) * 255));
      }
    }

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .trim()
      .png()
      .toFile(outputFile);

    console.log(`Saved transparent image to ${outputFile}`);
  } catch (err) {
    console.error(err);
  }
}

async function processAll() {
  for (const file of filesToProcess) {
    await removeWhiteBackground(file.input, file.output);
  }
}

processAll();
