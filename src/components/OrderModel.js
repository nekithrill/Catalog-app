import React, { useState } from 'react'
import {
	Center,
	Modal,
	VStack,
	HStack,
	Text,
	Button,
	Image,
	Pressable
} from 'native-base'
import Buttone from './Buttone'
import Colors from '../colors'
import { useNavigation } from '@react-navigation/native'

const OrdersInfo = [
	{
		title: 'Products',
		price: 125.77,
		color: 'black'
	},
	{
		title: 'Shipping',
		price: 34.0,
		color: 'black'
	},
	{
		title: 'Tax',
		price: 23.34,
		color: 'black'
	},
	{
		title: 'Total Amount',
		price: 183.11,
		color: 'main'
	}
]

const OrderModel = () => {
	const navigation = useNavigation()
	const [showModel, setShowModel] = useState(false)
	return (
		<Center>
			<Buttone
				onPress={() => setShowModel(true)}
				bg={Colors.black}
				color={Colors.white}
				mt={5}
			>
				SHOW PAYMENT & TOTAL
			</Buttone>
			<Modal isOpen={showModel} onClose={() => setShowModel(false)} size='lg'>
				<Modal.Content maxWidth={350}>
					<Modal.Header>Order</Modal.Header>
					<Modal.Body>
						<VStack space={7}>
							{OrdersInfo.map((i, index) => (
								<HStack
									key={index}
									alignItems='center'
									justifyContent='space-between'
								>
									<Text fontWeight='medium'>{i.title}</Text>
									<Text
										color={i.color === 'main' ? Colors.main : Colors.black}
										bold
										fontSize={16}
									>
										${i.price}
									</Text>
								</HStack>
							))}
						</VStack>
					</Modal.Body>
					<Modal.Footer>
						<Pressable
							w='full'
							justifyContent='center'
							bg={Colors.paypal}
							h={45}
							rounded={4}
							onPress={() => setShowModel(false)}
						>
							<Image
								source={require('../../assets/images/paypal-transparent.png')}
								alt='paypal'
								resizeMode='contain'
								w='full'
								h={34}
							></Image>
						</Pressable>
						<Button
							w='full'
							mt={4}
							flex={1}
							bg={Colors.black}
							h={45}
							_text={{ color: Colors.white }}
							onPress={() => {
								navigation.navigate('Home')
								setShowModel(false)
							}}
							_pressed={{ bg: Colors.main }}
						>
							PAY LATER
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</Center>
	)
}

export default OrderModel
