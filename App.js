import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import DrawerCategory from './components/DrawerCategory';
import Search from './pages/Search';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const App = () => {

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Pururam"
				screenOptions={{
					presentation: 'card',
					gestureEnabled: false,
					header: (props) => (
						<View 
							style={{
								backgroundColor: '#FFFFFF',
								height: 100,
								justifyContent: 'center',
							}}
						>
							<TouchableOpacity activeOpacity={0.5} onPress={props.navigation.goBack}>
								<Image 
									style={{
										width: 40,
										height: 40,
										borderColor: 'black',
										marginLeft: 10,
										...Platform.select({
											ios: {
												marginTop: 30,
											},
										}),
									}}
									source={require('./src/slick_prev.png')}
								/>
							</TouchableOpacity>
						</View>
					),
				}}
			>
				<Stack.Screen 
					name="Pururam"
					component={DrawerCategory}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen 
					name="검색" 
					component={Search} 
					options={{
						
					}}
				/>
				<Stack.Screen name='장바구니' component={Cart}
					options={{
						
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({

});

export default App;