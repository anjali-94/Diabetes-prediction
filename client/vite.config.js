// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Add the base path for deployment
  base: '/diabetes-prediction/',  // Replace this with the correct base path for your deployment

  // Optionally, add server configuration for local dev if needed
  server: {
    port: 5173, // You can change this if necessary
  },
});
