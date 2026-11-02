import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteUrl = 'https://massbim.my.id';

function stripRootTrailingSlash() {
  return {
    name: 'strip-root-trailing-slash',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distDir = fileURLToPath(dir);
        const files = (await readdir(distDir)).filter((name) => /^sitemap.*\.xml$/.test(name));
        await Promise.all(
          files.map(async (name) => {
            const filePath = join(distDir, name);
            const xml = await readFile(filePath, 'utf8');
            const normalized = xml.replaceAll(`<loc>${siteUrl}/</loc>`, `<loc>${siteUrl}</loc>`);
            if (normalized !== xml) await writeFile(filePath, normalized);
          }),
        );
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.endsWith('/404') && !page.endsWith('/404/'),
    }),
    stripRootTrailingSlash(),
  ],
});
