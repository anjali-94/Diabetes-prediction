import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/diabetes-prediction/',  // Replace this with your actual repo name
});
