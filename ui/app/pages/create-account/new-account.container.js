import { connect } from 'react-redux'
import {
  addNewAccount,
  setAccountLabel,
  buyEth,
} from '../../store/actions'
import { getSelectedAddress } from '../../selectors/selectors'
import NewAccountCreateForm from './new-account.component'

const mapStateToProps = (state) => {
  const { metamask: { network, identities = {} } } = state
  const numberOfExistingAccounts = Object.keys(identities).length
  const newAccountNumber = numberOfExistingAccounts + 1

  return {
    network,
    address: getSelectedAddress(state),
    newAccountNumber,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toCoinbase: (address) => dispatch(buyEth({ network: '1', address, amount: 0 })),
    createAccount: (newAccountName) => {
      return dispatch(addNewAccount())
        .then((newAccountAddress) => {
          if (newAccountName) {
            dispatch(setAccountLabel(newAccountAddress, newAccountName))
          }
        })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountCreateForm)
