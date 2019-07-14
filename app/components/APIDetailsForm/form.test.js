import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Formik } from 'formik'

import form from './form'

const onClear = jest.fn()
const handleBlur = jest.fn()
const handleChange = jest.fn()
const handleSubmit = jest.fn()

const formik = {
  registerField: jest.fn()
}

const resetStubs = () => {
  onClear.mockClear()
  handleBlur.mockClear()
  handleChange.mockClear()
  handleSubmit.mockClear()
  formik.registerField.mockClear()
}

const values = {
  apiKey: '123456-acbde',
  apiSecret: '123456abcde',
  requireAuth: true
}

let tree

const doTest = ([
  label,
  saving = false,
  touched = {},
  dirty = false,
  errors = {}
]) => {
  describe(label, () => {
    const Form = form({ saving, onClear })

    beforeAll(() => {
      tree = renderer.create(
        <Formik
          initialValues={values}
          onSubmit={this.submit}
          enableReinitialize={true}
          isInitialValid={true}
          validateOnBlur={true}
          validateOnChange={true}
        >
          <Form
            formik={formik}
            values={values}
            touched={touched}
            errors={errors}
            dirty={dirty}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
          />
        </Formik>
      )
    })

    afterAll(resetStubs)

    it('renders correctly', () => {
      expect(tree).toMatchSnapshot()
    })
  })
}

;[
  ['fresh form'],
  ['form is touched', false, { apiKey: true, apiSecret: true }, true],
  ['form is saving', true, { apiKey: true, apiSecret: true }, true],
  [
    'form has errors',
    false,
    { apiKey: true, apiSecret: true },
    true,
    { apiKey: 'oops', apiSecret: null }
  ]
].forEach(doTest)
