import React from 'react'
import { View } from 'react-native'

const rne = jest.genMockFromModule('react-native-paper')

rne.withTheme = jest.fn(fn => fn)
rne.DataTable = jest.fn(({ children }) => <View>{children}</View>)
rne.DataTable.Header = jest.fn(({ children }) => <View>{children}</View>)
rne.DataTable.Title = jest.fn(({ children }) => <View>{children}</View>)
rne.DataTable.Row = jest.fn(({ children }) => <View>{children}</View>)
rne.DataTable.Cell = jest.fn(({ children }) => <View>{children}</View>)

module.exports = rne
