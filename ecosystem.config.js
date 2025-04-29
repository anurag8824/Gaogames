module.exports = {
  apps: [
    {
      name: "gaogames-app",
      script: "./src/server.js",   // ✅ Notice "./src/server.js" because server.js is inside src
      exec_mode: "cluster",
      instances: "max",
      node_args: '--require sticky-cluster',
      autorestart: true,
      max_memory_restart: "500M",
      env_file: ".env"
    },
    {
      name: "health-check",
      script: "./health-check.js",
      watch: false
    }
  ]
}

