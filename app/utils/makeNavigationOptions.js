import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const tabBarOptions = {
  activeTintColor: 'white',
  inactiveTintColor: 'gray',
  activeBackgroundColor: 'gray'
}

const makeNavigationOptions = (title, iconName) => {
  if (!title && !iconName) return undefined
  const options = { title }
  if (iconName) {
    options.tabBarIcon = ({ tintColor }) => (
      <Icon name={iconName} size={20} color={tintColor} />
    )
    options.tabBarOptions = tabBarOptions
  }

  return () => options
}

export default makeNavigationOptions
