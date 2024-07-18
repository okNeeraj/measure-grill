module.exports = {
  apps: [
    {
      name: 'mgrill-frontend',
      script: 'npm',
      args: 'run dev',
      interpreter: '/bin/bash',
      cwd: '/var/www/html/measure-grill/frontend',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
