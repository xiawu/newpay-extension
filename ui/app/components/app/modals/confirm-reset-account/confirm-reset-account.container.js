import { connect } from 'react-redux'
import { compose } from 'recompose'
import withModalProps from '../../../../helpers/higher-order-components/with-modal-props'
import ConfirmResetAccount from './confirm-reset-account.component'
import { resetAccount } from '../../../../store/actions'
import { getSelectedAddress } from '../../../../selectors/selectors'

const mapDispatchToProps = (dispatch) => {
  return {
    resetAccount: (address) => dispatch(resetAccount(address)),
  }
}

const mapStateToProps = (state) => {
  return {
    selectedAddress: getSelectedAddress(state),
  }
}

export default compose(
  withModalProps,
  connect(mapStateToProps, mapDispatchToProps)
)(ConfirmResetAccount)
