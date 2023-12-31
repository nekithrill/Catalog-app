import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../screens/ProfileScreen'
import CartScreen from '../screens/CartScreen'
import { Center, Pressable } from 'native-base'
import {
	FontAwesome5,
	MaterialCommunityIcons,
	Ionicons
} from '@expo/vector-icons'
import Colors from '../colors'
import StackNav from './StackNav'

const Tab = createBottomTabNavigator()
const CustomTab = ({ children, onPress }) => (
	<Pressable
		onPress={onPress}
		h={70}
		w={70}
		rounded='full'
		bg={Colors.main}
		top={-30}
		shadow={2}
	>
		{children}
	</Pressable>
)
const BottomNav = () => {
	return (
		<Tab.Navigator
			backBehavior='main'
			initialRouteName='Main'
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: { ...styles.tab },
				headerShown: false,
				tabBarHideOnKeyboard: true
			}}
		>
			<Tab.Screen
				name='Main'
				component={StackNav}
				options={{
					tabBarIcon: ({ focused }) => (
						<Center>
							{focused ? (
								<Ionicons name='home' size={24} color={Colors.main} />
							) : (
								<Ionicons name='home-outline' size={24} color={Colors.black} />
							)}
						</Center>
					)
				}}
			/>
			{/* CART */}
			<Tab.Screen
				name='Cart'
				component={CartScreen}
				options={{
					tabBarButton: props => <CustomTab {...props} />,
					tabBarIcon: ({ focused }) => (
						<Center>
							{focused ? (
								<MaterialCommunityIcons
									name='shopping'
									size={24}
									color={Colors.white}
								/>
							) : (
								<MaterialCommunityIcons
									name='shopping-outline'
									size={24}
									color={Colors.white}
								/>
							)}
						</Center>
					)
				}}
			/>

			{/* PROFILE */}
			<Tab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<Center>
							{focused ? (
								<FontAwesome5 name='user-alt' size={24} color={Colors.main} />
							) : (
								<FontAwesome5 name='user' size={24} color={Colors.black} />
							)}
						</Center>
					)
				}}
			/>
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	tab: {
		elevation: 0,
		backgroundColor: Colors.white,
		height: 60
	}
})

export default BottomNav
