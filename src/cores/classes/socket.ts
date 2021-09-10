
import socketClusterServer from 'socketcluster-server';
import { AGServerOptions } from 'socketcluster-server/server';

export default class SocketClusterServer {
    private socket: socketClusterServer.AGServer
    private options: AGServerOptions
    constructor(options?: any) {
        this.options = options || {};
    }
    run(port?: number) {
        this.socket = socketClusterServer.listen(port || 9999, this.options, () => console.log(`SocketCluster is running on port ${port || 9999}`))
        this.handlerSocketRequest()
    }
    async handlerSocketRequest() {
        for await (let { socket } of this.socket.listener('connection')) {
            (async () => {
                for await (let data of socket.receiver('foo')) {
                    console.log(data)
                }
            })();
            (async () => {
                for await (let request of socket.procedure('PLC-rpc')) {
                    if (request.data && request.data.bad) {
                        let badCustomError = new Error('Server failed to execute the procedure');
                        badCustomError.name = 'BadCustomError';
                        request.error(badCustomError);
                        continue;
                    }
                    request.end('Success');
                }
            })();
        }

    }
}