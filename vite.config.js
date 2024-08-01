import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/dr_menu/', // 리포지토리 이름으로 변경하세요
  build: {
    outDir: 'dist',
  },
});
