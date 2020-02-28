import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Media from 'react-media'
import MenuBar from '../menu-bar'
import TransactionViewBalance from '../transaction-view-balance'
import TransactionList from '../transaction-list'

export default class HomeView extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render () {
    return (
      <div className="home-view">
        <Media
          query="(max-width: 575px)"
          render={() => <MenuBar />}
        />
        <div className="home-view__balance-wrapper">
          <TransactionViewBalance />
        </div>
        <TransactionList>
          { this.props.children }
        </TransactionList>
      </div>
    )
  }
}
