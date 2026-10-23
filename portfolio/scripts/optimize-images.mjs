import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const source = path.join(root, 'legacy', 'images')
const output = path.join(root, 'public', 'images')

await mkdir(output, { recursive: true })

const jobs = [
  { file: 'parascores-home.png', out: 'parascores-home.webp', width: 1800 },
  { file: 'parascores-mobile.png', out: 'parascores-mobile.webp', width: 760 },
]

for (const job of jobs) {
  const info = await sharp(path.join(source, job.file))
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(path.join(output, job.out))
  console.log(`${job.out} — ${info.width}x${info.height} (${Math.round(info.size / 1024)} KB)`)
}

const bracketDetail = await sharp(path.join(source, 'parascores-bracket.png'))
  .extract({ left: 560, top: 865, width: 2320, height: 935 })
  .resize({ width: 1800 })
  .webp({ quality: 86, effort: 5 })
  .toFile(path.join(output, 'parascores-bracket-detail.webp'))
console.log(
  `parascores-bracket-detail.webp — ${bracketDetail.width}x${bracketDetail.height} (${Math.round(bracketDetail.size / 1024)} KB)`,
)

const socialCard = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f3f0e7"/>
  <rect x="32" y="32" width="1136" height="566" fill="none" stroke="#16150f" stroke-opacity="0.22"/>
  <text x="72" y="112" font-family="Consolas, monospace" font-size="17" letter-spacing="4" fill="#6b675b">OLUWASEYI HASSAN / SOFTWARE ENGINEER</text>
  <text x="68" y="260" font-family="Georgia, serif" font-size="88" fill="#16150f">I build software</text>
  <text x="68" y="356" font-family="Georgia, serif" font-size="88" font-style="italic" fill="#16150f">people actually use.</text>
  <line x1="72" y1="414" x2="472" y2="414" stroke="#2c5e3f" stroke-width="4"/>
  <text x="72" y="512" font-family="Consolas, monospace" font-size="18" letter-spacing="3" fill="#6b675b">PARASCORES · TYPESCRIPT · NESTJS · POSTGRESQL</text>
  <circle cx="1004" cy="112" r="7" fill="#2c5e3f"/>
  <text x="1022" y="118" font-family="Consolas, monospace" font-size="13" letter-spacing="1.6" fill="#2c5e3f">OPEN TO REMOTE</text>
  <text x="72" y="566" font-family="Consolas, monospace" font-size="15" letter-spacing="3" fill="#6b675b">OSUN, NIGERIA · UTC+1</text>
</svg>`

const og = await sharp(Buffer.from(socialCard))
  .png({ quality: 90 })
  .toFile(path.join(root, 'public', 'og.png'))
console.log(`og.png — ${og.width}x${og.height} (${Math.round(og.size / 1024)} KB)`)
