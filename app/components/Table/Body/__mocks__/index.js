import React from 'react'
import { View, Text } from 'react-native'

export default jest.fn(({ data, makeKey }) => (
  <View>
    {data.map((d, i) => (
      <View key={d[0]}>
        {d.map((dd, j) => (
          <Text key={makeKey(d[0], j)}>{dd}</Text>
        ))}
      </View>
    ))}
  </View>
))
