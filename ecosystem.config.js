module.exports = {
  apps: [
    {
      name: "gaogames-app",
      script: "Gaogames/src/server.js",
      exec_mode: "cluster",
      instances: "max",
      autorestart: true,
      max_memory_restart: "500M",
      env_file: ".env"  // 👈 this auto-loads all your .env vars
    },
    {
      name: "health-check",
      script: "./health-check.js",
      watch: false
    }
  ]
}
