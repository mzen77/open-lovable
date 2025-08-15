// PM2 configuration for Open Lovable Next.js application
module.exports = {
  apps: [
    {
      name: 'open-lovable',
      script: 'node_modules/.bin/next',
      args: 'dev --port 3000',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        NODE_OPTIONS: '--max-old-space-size=2048'
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '2G',
      autorestart: false
    }
  ]
}