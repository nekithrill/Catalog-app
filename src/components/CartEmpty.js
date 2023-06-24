import { Center, Box, Text } from 'native-base'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import Colors from '../colors'
import Buttone from './Buttone'

const CartEmpty = () => {
	return (
		<Box flex={1} px={4}>
			<Center h='90%'>
				<Center w={200} h={200} bg={Colors.white} rounded='full'>
					<Entypo name='shopping-bag' size={64} color={Colors.main} />
				</Center>
				<Text color={Colors.main} bold mt={5} fontSize={18}>
					CART IS EMPTY
				</Text>
			</Center>
			<Buttone bg={Colors.black} color={Colors.white}>
				START SHOPPING
			</Buttone>
		</Box>
	)
}

export default CartEmpty
