const http = require('http');

// Health check options
const options = {
  hostname: 'localhost',
  port: process.env.PORT || 3000, // Ensure it matches the port in .env
  path: '/health',
  method: 'GET',
  timeout: 5000 // Timeout after 5 seconds
};

// Health check function
function checkHealth() {
  const req = http.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('✅ Health check passed.');
    } else {
      console.error('❌ Health check failed! Status code:', res.statusCode);
      process.exit(1); // Force shutdown if health check fails
    }
  });

  req.on('error', (err) => {
    console.error('❌ Health check error:', err.message);
    process.exit(1); // Force shutdown if error occurs
  });

  req.on('timeout', () => {
    console.error('❌ Health check timeout.');
    req.destroy();
    process.exit(1); // Force shutdown if timeout occurs
  });

  req.end();
}

// Run health check every minute (60000ms)
setInterval(checkHealth, 60000);

console.log("Health check started. Running every minute.");

