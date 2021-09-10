import * as socketClusterServer from 'socketcluster-server';

export default class SocketServer {
  private socketClusterServer = socketClusterServer;
  private options: any;
  private socket: any
  constructor(options?: any) {
    if (options && options.hasOwnProperty('debug'))
      this.options = options
    return this
  }
  async attach(server: any) {
    this.socket = this.socketClusterServer.attach(server.app, this.options);
    // for await (let { socket } of this.socket.listener('connection')) {

    //   (async () => {
    //     // Set up a loop to handle remote transmitted events.
    //     for await (let data of socket.receiver('customRemoteEvent')) {
    //       // ...
    //     }
    //   })();

    // }

  }
  test() {

  }
}
