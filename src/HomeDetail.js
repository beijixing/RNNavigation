import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert,
  StatusBar,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class HomeDetail extends React.Component {

	constructor(props) {
	  super(props);
	
	}

	_onPressButton = () => {
		// Alert.alert("你点了按钮");
		Navigation.dismissModal(this.props.componentId);
	}

	_onPressPopButton = () => {
		// Alert.alert("你点了按钮");
		Navigation.pop(this.props.componentId);
	}

	render() {
		return(
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: this.props.backgroundColor}}	>
			

			 <Button 
				onPress={this._onPressPopButton}
				title="点我 popView"
				color="#841584"
			 ></Button>

			<Text > HomePageDetail </Text>
			</View>
		);
	}
}