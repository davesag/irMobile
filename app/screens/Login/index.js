import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'

import { navigationShape } from '../../shapes'

import APIDetailsForm from '../../components/APIDetailsForm'

import styles from './styles'

export class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Log In'
  }

  static propTypes = {
    navigation: PropTypes.shape(navigationShape).isRequired
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <APIDetailsForm />
      </SafeAreaView>
    )
  }
}

export default LoginScreen
