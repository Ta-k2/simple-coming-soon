import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: (() => {
    const publicPath = path.resolve(__dirname, 'public');
    const safePath = path.resolve(__dirname, '.public-safe');
    try {
      if (fs.existsSync(safePath)) fs.rmSync(safePath, { recursive: true, force: true });
      fs.mkdirSync(safePath, { recursive: true });
      const entries = fs.readdirSync(publicPath);
      for (const entry of entries) {
        if (entry.includes(' ')) continue;
        const src = path.join(publicPath, entry);
        const dest = path.join(safePath, entry);
        try {
          fs.copyFileSync(src, dest);
        } catch {
          // skip unreadable files
        }
      }
    } catch {
      return 'public';
    }
    return '.public-safe';
  })(),
});
