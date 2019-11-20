import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class MyPage extends React.Component {
	render() {
		return(
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}	>
			<Text > MyPage </Text>
			</View>
		);
	}
}