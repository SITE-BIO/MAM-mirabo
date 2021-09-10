require('dotenv').config()
import 'reflect-metadata'
import { AppServer, Socket } from './cores';
import MongoProvider from './providers/mongo';

(async () => {
  await MongoProvider.connect({
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new AppServer({ debug: process.env.DEBUG === 'true' });
  const socket = new Socket()
  await  socket.attach(server)
  server.run(8000)
})();
