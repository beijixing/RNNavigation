import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class MyPage extends React.Component {

	onPressBtn = () => {
		Navigation.push(this.props.componentId, {
			component:{
				name: 'navigation.HomeDetail',
				options: {
					topBar: {
						title: {
							text: 'HomeDetail'
						}
					}
				}

			}
		});
	}

	render() {
		return(
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}	>
			<Text > MyPage </Text>
			<Button onPress={this.onPressBtn} title='点我跳转' />
			</View>
		);
	}
}