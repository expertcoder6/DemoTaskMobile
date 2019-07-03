import React, {Component} from 'react';
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

// import screens
import ClientListScreen from '../components/dashboard/Clients'
import ClientDetailScreen from '../components/dashboard/ClientDetail'

// Setup the stack navigation
export const  AppScreens = createStackNavigator(
  {
    // list of screens in the app
    Client: {screen: ClientListScreen},
    ClientDetail: {screen: ClientDetailScreen}
  },
  {
    initialRouteName: "Client"
  }
);

export const MainNavigator =  createAppContainer(AppScreens);

