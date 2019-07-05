import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBalances } from '../../services/ir/actions'
import makeNavigationOptions from '../../utils/makeNavigationOptions'

import { navigationShape, balancesShape } from '../../shapes'

import AccountBalances from '../../components/AccountBalances'

import styles from './styles'

export class BalancesScreen extends Component {
  static navigationOptions = makeNavigationOptions('Balances', 'piggy-bank')

  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired,
    balances: PropTypes.arrayOf(PropTypes.shape(balancesShape)).isRequired,
    doGetBalances: PropTypes.func.isRequired,
    hasKeys: PropTypes.bool,
    loading: PropTypes.bool
  }

  static defaultProps = {
    hasKeys: false,
    loading: false
  }

  refreshBalances = () => {
    this.props.doGetBalances()
  }

  navigateToSettings = () => {
    this.props.navigation.navigate('Settings')
  }

  renderDetails = () => {
    const { hasKeys, balances, loading } = this.props
    if (!hasKeys)
      return (
        <View>
          <Text h3>Missing Keys</Text>
          <Text>We need your Independent Reserve API Keys</Text>
          <Button
            style={styles.button}
            title="Enter Keys…"
            onPress={this.navigateToSettings}
          />
        </View>
      )

    return (
      <View>
        <Text h3>Balances</Text>
        <AccountBalances balances={balances} />
        <Button
          style={styles.button}
          title="Refresh"
          onPress={this.refreshBalances}
          loading={loading}
          disabled={loading}
        />
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderDetails()}
      </SafeAreaView>
    )
  }
}

export const mapStateToProps = ({
  ir: { apiKey, apiSecret, busy, balances }
}) => ({ hasKeys: Boolean(apiKey && apiSecret), loading: busy, balances })

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ doGetBalances: getBalances }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BalancesScreen)
