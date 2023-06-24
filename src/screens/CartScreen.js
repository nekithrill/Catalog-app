import { useNavigation } from '@react-navigation/native'
import { Text, Box, Center, ScrollView, HStack, Button } from 'native-base'
import React from 'react'
import Colors from '../colors'
import Buttone from '../components/Buttone'
// import CartEmpty from '../components/CartEmpty'
import CartItems from '../components/CartItems'

function CartScreen() {
	const navigation = useNavigation()

	return (
		<Box flex={1} safeAreaTop bg={Colors.subGreen}>
			{/* HEADER */}
			<Center w='full' py={5}>
				<Text color={Colors.black} fontSize={20} bold>
					Cart
				</Text>
			</Center>
			{/* IF CART IS EMPTY
			<CartEmpty /> */}

			{/* CART ITEMS */}
			<ScrollView showsVerticalScrollIndicator={false}>
				<CartItems />

				{/* TOTAL */}
				<Center mt={5}>
					<HStack
						rounded={50}
						justifyContent='space-between'
						bg={Colors.white}
						shadow={2}
						w='90%'
						pl={5}
						h={45}
						alignItems='center'
					>
						<Text>TOTAL</Text>
						<Button
							px={10}
							h={45}
							rounded={50}
							bg={Colors.main}
							_text={{ color: Colors.white, fontWeight: 'semibold' }}
							_pressed={{ bg: Colors.main }}
						>
							$356
						</Button>
					</HStack>
				</Center>

				{/* CHECKOUT */}
				<Center px={5}>
					<Buttone
						onPress={() => navigation.navigate('Shipping')}
						bg={Colors.black}
						color={Colors.white}
						mt={10}
					>
						CHECKOUT
					</Buttone>
				</Center>
			</ScrollView>
		</Box>
	)
}

export default CartScreen
