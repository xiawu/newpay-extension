const defaultNetworksData = [
  {
    labelKey: 'mainnet',
    iconColor: '#29B6AF',
    providerType: 'mainnet',
    rpcUrl: 'https://global.rpc.mainnet.newtonproject.org',
    chainId: '1012',
    ticker: 'NEW',
    blockExplorerUrl: 'https://explorer.newtonproject.org',
  },
  {
    labelKey: 'testnet',
    iconColor: '#FF4A8D',
    providerType: 'testnet',
    rpcUrl: 'https://rpc1.newchain.newtonproject.org',
    chainId: '1007',
    ticker: 'NEW',
    blockExplorerUrl: 'https://explorer.testnet.newtonproject.org',
  },
  {
    labelKey: 'localhost',
    iconColor: 'white',
    border: '1px solid #6A737D',
    providerType: 'localhost',
    rpcUrl: 'http://localhost:8545/',
    blockExplorerUrl: 'https://explorer.testnet.newtonproject.org',
  },
]

export {
  defaultNetworksData,
}
