import { connect } from 'react-redux'
import { displayWarning, requestRevealSeedWords, fetchInfoToSync } from '../../store/actions'
import { getSelectedAddress } from '../../selectors/selectors'
import MobileSyncPage from './mobile-sync.component'

const mapDispatchToProps = (dispatch) => {
  return {
    requestRevealSeedWords: (password) => dispatch(requestRevealSeedWords(password)),
    fetchInfoToSync: () => dispatch(fetchInfoToSync()),
    displayWarning: (message) => dispatch(displayWarning(message || null)),
  }
}

const mapStateToProps = (state) => {
  return {
    selectedAddress: getSelectedAddress(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileSyncPage)
