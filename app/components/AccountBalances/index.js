import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '../Table'

import styles from './styles'
import formatData from './formatData'

const header = ['Currency', 'Balance', 'AUD Price', 'AUD Value']

class AccountBalances extends Component {
  static propTypes = {
    details: PropTypes.array.isRequired
  }

  // because we will update these fields later via sockets
  constructor(props) {
    super(props)

    this.state = {
      details: props.details
    }
  }

  render() {
    const { details } = this.state
    const { body, footer } = formatData(details)

    return (
      <Table
        tableStyle={styles.container}
        header={header}
        body={body}
        footer={footer}
      />
    )
  }
}

export default AccountBalances
