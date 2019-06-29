import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from '../Table'

import { balancesShape } from '../../shapes'

import styles from './styles'
import formatData from './formatData'

const header = ['Currency', 'Balance', 'AUD Price', 'AUD Value']

const AccountBalances = ({ balances }) => {
  const { body, footer } = formatData(balances)

  return (
    <Table
      tableStyle={styles.container}
      header={header}
      body={body}
      footer={footer}
    />
  )
}

AccountBalances.propTypes = {
  balances: PropTypes.arrayOf(PropTypes.shape(balancesShape)).isRequired
}

export default AccountBalances
