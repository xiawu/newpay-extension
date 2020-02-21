import { connect } from 'react-redux'
import SendAssetRow from './send-asset-row.component'
import {
  getMetaMaskAccounts, getSelectedAddress
} from '../../../../selectors/selectors'
import { setSelectedToken } from '../../../../store/actions'

function mapStateToProps (state) {
  return {
    tokens: state.metamask.tokens,
    selectedAddress: getSelectedAddress(state),
    selectedTokenAddress: state.metamask.selectedTokenAddress,
    accounts: getMetaMaskAccounts(state),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setSelectedToken: (address) => dispatch(setSelectedToken(address)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendAssetRow)
