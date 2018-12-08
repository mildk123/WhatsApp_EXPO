import React from 'react'
import { createStackNavigator } from 'react-navigation'
// import WelcomeScreen from '../Screens/Welcome'
import verifyPhone from '../Screens/verifyPhone'

export default createStackNavigator({
    // Welcome: WelcomeScreen,
    verifyPhone : verifyPhone
  });