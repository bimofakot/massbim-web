import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const fontPath = path.join(
  root,
  'node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2',
);
const faviconSvgPath = path.join(publicDir, 'brand/massbim-favicon-pine.svg');
const ogPath = path.join(publicDir, 'og.png');

const browsers = [
  process.env.BROWSER_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/microsoft-edge',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
].filter(Boolean);

const browser = browsers.find((candidate) => existsSync(candidate));
if (!browser) {
  throw new Error('Browser tidak ditemukan. Set BROWSER_PATH ke Chrome atau Edge.');
}

const fontData = readFileSync(fontPath).toString('base64');
const html = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <style>
      @font-face {
        font-family: 'DM Sans';
        src: url(data:font/woff2;base64,${fontData}) format('woff2');
        font-weight: 100 1000;
        font-style: normal;
      }
      * { box-sizing: border-box; }
      html, body { width: 1200px; height: 630px; margin: 0; overflow: hidden; }
      body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 88px 96px;
        background: #fbfaf7;
        color: #171614;
        font-family: 'DM Sans', sans-serif;
      }
      .rule { width: 56px; height: 4px; margin-bottom: 36px; background: #1f5a45; }
      h1 {
        margin: 0;
        font-size: 128px;
        font-weight: 700;
        line-height: 0.95;
        letter-spacing: -0.05em;
      }
      p {
        margin: 28px 0 0;
        max-width: 1008px;
        font-size: 38px;
        font-weight: 500;
        line-height: 1.3;
        letter-spacing: -0.01em;
        color: #6b655d;
      }
    </style>
  </head>
  <body>
    <div class="rule"></div>
    <h1>Massbim</h1>
    <p>Katalog tools kecil dan jasa pembuatan website.</p>
  </body>
</html>`;

const tempDir = mkdtempSync(path.join(tmpdir(), 'massbim-assets-'));
const htmlPath = path.join(tempDir, 'og.html');
const shotPath = path.join(tempDir, 'og.png');

try {
  writeFileSync(htmlPath, html);

  execFileSync(
    browser,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=1200,630',
      '--virtual-time-budget=5000',
      '--run-all-compositor-stages-before-draw',
      `--user-data-dir=${path.join(tempDir, 'profile')}`,
      `--screenshot=${shotPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: 'inherit' },
  );

  const metadata = await sharp(shotPath).metadata();
  if (metadata.width !== 1200 || metadata.height !== 630) {
    throw new Error(`Ukuran OG salah: ${metadata.width}x${metadata.height}`);
  }
  await sharp(shotPath).toFile(ogPath);

  const faviconSvg = readFileSync(faviconSvgPath);
  await sharp(faviconSvg, { density: 384 }).resize(32, 32).png().toFile(
    path.join(publicDir, 'favicon.png'),
  );
  await sharp(faviconSvg, { density: 384 })
    .resize(180, 180)
    .flatten({ background: '#1f5a45' })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('Aset dibuat: public/og.png, public/favicon.png, public/apple-touch-icon.png');
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
