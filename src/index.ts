require('dotenv').config()
import 'reflect-metadata'
import { AppServer, SocketClusterServer } from './cores';
import { postGresConfig , socketPort , serverPort } from './includes/config';
import PostGres from './providers/postgres';

(async () => {
  await PostGres.connect(postGresConfig)
  new AppServer({ debug: process.env.DEBUG === 'true' }).run(serverPort);
  new SocketClusterServer().run(socketPort)
})();
