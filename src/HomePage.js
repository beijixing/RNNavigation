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

export default class HomePage extends React.Component {

	constructor(props) {
	  	super(props);
	  	this.props = props;
	}

	onPressNavigationButton = () =>{
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

	onPressShowModalButton = () => {
		Navigation.showModal({
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
			<Button 
				onPress = {this.onPressNavigationButton}
				title="导航到HomeDetail"
				color="#841584"
			 ></Button>

			
			<Text > HomePage </Text>
			<Text> {this.props.componentId} </Text>
			</View>
		);
	}
}