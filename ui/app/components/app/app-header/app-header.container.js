import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import AppHeader from './app-header.component'
import {
  showNetworkDropdown,
  hideNetworkDropdown,
  toggleAccountMenu,
} from '../../../store/actions'
import {
  getSelectedAddress,
} from '../../../selectors/selectors'

const mapStateToProps = (state) => {
  const { appState, metamask } = state
  const { networkDropdownOpen } = appState
  const {
    network,
    provider,
    isUnlocked,
    isAccountMenuOpen,
  } = metamask

  return {
    networkDropdownOpen,
    network,
    provider,
    selectedAddress: getSelectedAddress(state),
    isUnlocked,
    isAccountMenuOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showNetworkDropdown: () => dispatch(showNetworkDropdown()),
    hideNetworkDropdown: () => dispatch(hideNetworkDropdown()),
    toggleAccountMenu: () => dispatch(toggleAccountMenu()),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AppHeader)
