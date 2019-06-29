import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBalances } from '../../services/ir/actions'

import { navigationShape, balancesShape } from '../../shapes'

import AccountBalances from '../../components/AccountBalances'

import styles from './styles'

export class BalancesScreen extends Component {
  static navigationOptions = {
    title: 'Balances'
  }

  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired,
    balances: PropTypes.arrayOf(PropTypes.shape(balancesShape)).isRequired,
    getBalances: PropTypes.func.isRequired,
    hasKeys: PropTypes.bool,
    loading: PropTypes.bool
  }

  static defaultProps = {
    hasKeys: false,
    loading: false
  }

  refreshBalances = () => {
    this.props.getBalances()
  }

  navigateToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  renderDetails = () => {
    const { hasKeys, balances, loading } = this.props
    if (!hasKeys)
      return (
        <View>
          <Text h3>Missing Keys</Text>
          <Text>We need your Independent Reserve API Keys</Text>
          <Button title="Enter Keys…" onPress={this.navigateToLogin} />
        </View>
      )

    return (
      <View>
        <Text h3>Balances</Text>
        <AccountBalances balances={balances} />
        <Button
          title="Refresh"
          onPress={this.refreshBalances}
          loading={loading}
        />
      </View>
    )
  }

  componentDidMount() {
    const { balances, getBalances: doGetBalances } = this.props
    if (!balances.length) doGetBalances()
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
  bindActionCreators({ getBalances }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BalancesScreen)
