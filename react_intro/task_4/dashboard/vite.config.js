
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/holbertonschool-web_react/react_intro/task_4/dashboard/'
})