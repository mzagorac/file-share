const { createServer } = require('http');
const app = require('./app.js');
const {
  dev: { port },
} = require('./config');
const { dbRun } = require('./database/mongoDB.js');
let mongoClient;

const PORT = Number(port) || 8080;
const httpServer = createServer(app);

dbRun().then(client => {
  if (client) {
    mongoClient = client;
    httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } else {
    console.log('Unable to connect to the database client');
    process.exit(1);
  }
});

function cleanup(event) {
  mongoClient.close();
  process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
