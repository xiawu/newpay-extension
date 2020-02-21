import { connect } from 'react-redux'
import UniqueImage from './unique-image.component'
import { getSelectedAddress } from '../../../../selectors/selectors'

const mapStateToProps = ({ metamask }) => {
  return {
    address: getSelectedAddress(state),
  }
}

export default connect(mapStateToProps)(UniqueImage)
