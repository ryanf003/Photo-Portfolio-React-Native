import React, { Component } from 'react';
import Home from './HomeComponent';
import Portfolio from './PortfolioComponent';
import AlbumContents from './AlbumContentsComponent';
import { ALBUMS } from '../shared/albums';
import { CONTENTS } from '../shared/contents';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const PortfolioNavigator = createStackNavigator(
    {
        Portfolio: { screen: Portfolio },
        AlbumContents: { screen: AlbumContents }
    }, 
    {
        initialRouteName: 'Portfolio',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3a3f44'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3a3f44'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Portfolio: { screen: PortfolioNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;