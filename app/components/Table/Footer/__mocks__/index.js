import React from 'react'
import { View, Text } from 'react-native'

export default jest.fn(({ data, makeKey }) =>
  data ? (
    <View>
      {data.map((d, i) => (
        <Text key={makeKey(d, i)}>d</Text>
      ))}
    </View>
  ) : null
)
