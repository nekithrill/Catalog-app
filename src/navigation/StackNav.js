import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ShippingScreen from '../screens/ShippingScreen'
import PaymentScreen from '../screens/PaymentScreen'
import PlaceOrderScreen from '../screens/PlaceOrderScreen'
import ProductScreen from '../screens/ProductScreen'

const Stack = createNativeStackNavigator()
const StackNav = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Product' component={ProductScreen} />
			<Stack.Screen name='Shipping' component={ShippingScreen} />
			<Stack.Screen name='Checkout' component={PaymentScreen} />
			<Stack.Screen name='Placeorder' component={PlaceOrderScreen} />
		</Stack.Navigator>
	)
}

export default StackNav
