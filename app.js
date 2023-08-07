const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const Redis = require('ioredis');

const redisPort = 8369;

const checkRedisStatus = async (port) => {
  const redis = new Redis({
    port: port,
    lazyConnect: true, // Avoids immediate connection
  });

  try {
    await redis.connect();
    console.log('Redis is running');
  } catch (error) {
    console.error('Redis is not running');
    throw error;
  } finally {
    redis.disconnect();
  }
};

checkRedisStatus(redisPort);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
