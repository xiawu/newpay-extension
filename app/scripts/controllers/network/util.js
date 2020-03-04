const {
  MAINNET,
  TESTNET,
  MAINNET_CODE,
  TESTNET_CODE,
  MAINNET_DISPLAY_NAME,
  TESTNET_DISPLAY_NAME,
} = require('./enums')

const networkToNameMap = {
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [TESTNET]: TESTNET_DISPLAY_NAME,
}

const getNetworkDisplayName = key => networkToNameMap[key]

function formatTxMetaForRpcResult (txMeta) {
  return {
    'blockHash': txMeta.txReceipt ? txMeta.txReceipt.blockHash : null,
    'blockNumber': txMeta.txReceipt ? txMeta.txReceipt.blockNumber : null,
    'from': txMeta.txParams.from,
    'gas': txMeta.txParams.gas,
    'gasPrice': txMeta.txParams.gasPrice,
    'hash': txMeta.hash,
    'input': txMeta.txParams.data || '0x',
    'nonce': txMeta.txParams.nonce,
    'to': txMeta.txParams.to,
    'transactionIndex': txMeta.txReceipt ? txMeta.txReceipt.transactionIndex : null,
    'value': txMeta.txParams.value || '0x0',
    'v': txMeta.v,
    'r': txMeta.r,
    's': txMeta.s,
  }
}


module.exports = {
  getNetworkDisplayName,
  formatTxMetaForRpcResult,
}
