import {
	Box,
	Center,
	HStack,
	Image,
	ScrollView,
	Spacer,
	Text,
	VStack
} from 'native-base'
import React from 'react'
import Colors from '../colors'
import Buttone from '../components/Buttone'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const paymentMethods = [
	{
		image: require('../../assets/images/paypal.png'),
		alt: 'paypal',
		icon: 'Ionicons'
	},
	{
		image: require('../../assets/images/discover.png'),
		alt: 'discover',
		icon: 'fontAIowesome'
	},
	{
		image: require('../../assets/images/googlepay.png'),
		alt: 'googlepay',
		icon: 'fontAwesome'
	}
]

function PaymentScreen() {
	const navigation = useNavigation()
	return (
		<Box flex={1} safeAreaTop bg={Colors.main} py={5}>
			{/* HEADER */}
			<Center pb={15}>
				<Text color={Colors.white} fontSize={14} bold>
					PAYMENT METHOD
				</Text>
			</Center>

			{/* SELECTION */}
			<Box h='full' bg={Colors.subGreen} px={5}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<VStack space={6} mt={5}>
						{paymentMethods.map((i, index) => (
							<HStack
								key={index}
								alignItems='center'
								justifyContent='space-between'
								bg={Colors.white}
								px={3}
								py={1}
								rounded={10}
							>
								<Box>
									<Image
										source={i.image}
										alt={i.alt}
										resizeMode='contain'
										w={60}
										h={50}
									/>
									<Spacer />
								</Box>
								{i.icon === 'Ionicons' ? (
									<Ionicons
										name='checkmark-circle'
										size={30}
										color={Colors.main}
									/>
								) : (
									<FontAwesome name='circle-o' size={30} color={Colors.main} />
								)}
							</HStack>
						))}

						<Buttone
							onPress={() => navigation.navigate('Placeorder')}
							bg={Colors.main}
							color={Colors.white}
							mt={5}
						>
							CONTINUE
						</Buttone>
						<Text italic textAlign='center'>
							Payment method is{' '}
							<Text italic bold>
								Paypal
							</Text>{' '}
							by default
						</Text>
					</VStack>
				</ScrollView>
			</Box>
		</Box>
	)
}

export default PaymentScreen
