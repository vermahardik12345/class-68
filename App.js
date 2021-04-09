import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Component } from 'react';
import Sscreen from './screens/Sscreen';
import tscreen from './screens/tscreen';
export default class App extends  React.Component{
render(){
  return(
   <Appcont/>
  )
}
}


const navigate =createBottomTabNavigator({
transaction:{screen:tscreen},
search:{screen:Sscreen}
})


const Appcont =createAppContainer(
  navigate
)


