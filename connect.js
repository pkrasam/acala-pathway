const { ApiPromise } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');
const { options } = require('@acala-network/api');

async function main() {
    const provider = new WsProvider('wss://node-6640517791634960384.jm.onfinality.io/ws');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version()
      ]);
    
    console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
    }

main()
