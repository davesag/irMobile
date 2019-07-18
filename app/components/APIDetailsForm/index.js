import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Keyboard } from 'react-native'
import { Formik } from 'formik'

import { keysShape } from '../../shapes'

import form from './form'

class APIDetailsForm extends Component {
  static propTypes = {
    keys: PropTypes.shape(keysShape),
    requireAuth: PropTypes.bool,
    saving: PropTypes.bool,
    onSave: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  }

  static defaultProps = {
    requireAuth: false,
    keys: null,
    saving: false
  }

  submit = values => {
    this.props.onSave(values)
    Keyboard.dismiss()
  }

  render() {
    const { keys: keysProp, requireAuth, saving, onClear } = this.props
    const keys = keysProp || {}
    const hasKeys = Object.keys(keys).length !== 0

    return (
      <Formik
        initialValues={{ ...keys, requireAuth }}
        onSubmit={this.submit}
        enableReinitialize={true}
        isInitialValid={hasKeys}
        validateOnBlur={true}
        validateOnChange={true}
      >
        {form({ saving, onClear })}
      </Formik>
    )
  }
}

export default APIDetailsForm
