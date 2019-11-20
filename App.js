/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import WelcomePage from './src/WelcomePage';
import MyPage from './src/MyPage';
import HomePage from './src/HomePage';

Navigation.registerComponent('navigation.WelcomePage', () => WelcomePage);
Navigation.registerComponent('navigation.MyPage', () => MyPage);
Navigation.registerComponent('navigation.HomePage', () => HomePage);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
  root: {
      bottomTabs:{
        children:[
          {
            stack:{
              children:[
                {
                  component: {
                    name: 'navigation.HomePage',
                    passProps: 'HomePage...',
                  }
                }
              ],
              options: {
              bottomTab: {
                text: '首页',
                selectedTextColor: 'red',
                icon: require('./images/shouye.png'),
                selectedIcon: require('./images/shouye_sel.png')
              }
            }
            },
            
              
          },
          {
            component: {
              name: 'navigation.MyPage',
              passProps: 'MyPage...' ,
              options: {
                bottomTab: {
                  text: '商圈',
                  selectedTextColor: 'red',
                  icon: require('./images/shangquan.png'),
                  selectedIcon: require('./images/shangquan_sel.png')
                }
              }
            }
          }
        ]
      }
    }
  });
});



