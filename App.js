
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/transactionScreen';
import SearchScreen from './screens/searchScreen';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
}}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
},{
  defaultNavigationOptions:({
    navigation
  })=>({
    tabBarIcon:({})=>{
    const routeName=navigation.state.routeName
    if(routeName==='Transaction'){
      return(<Image style= {{width:50,height:50}} source={require('./assets/book.png')}/>);
    }
    else if(routeName==='Search'){
      return(<Image style= {{width:50,height:50}} source={require('./assets/searchingbook.png')}/>);
     }
    }
  })
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
