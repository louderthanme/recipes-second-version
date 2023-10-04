import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:'localhost',
    port:3000,
    hmr: {
      host: 'localhost',
    }
  }
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     host: '0.0.0.0',
//     port: 3000,
//     hmr: {
//       host: '192.168.0.14', 
//     }
//   }
// })
