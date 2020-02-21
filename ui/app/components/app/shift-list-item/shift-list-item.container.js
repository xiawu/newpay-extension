import { connect } from 'react-redux'
import ShiftListItem from './shift-list-item.component'
import { getSelectedAddress } from '../../../selectors/selectors'

function mapStateToProps (state) {
  return {
    selectedAddress: getSelectedAddress(state),
    conversionRate: state.metamask.conversionRate,
    currentCurrency: state.metamask.currentCurrency,
  }
}

export default connect(mapStateToProps)(ShiftListItem)
