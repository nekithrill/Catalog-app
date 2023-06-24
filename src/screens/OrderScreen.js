import { Box, ScrollView, Heading } from 'native-base'
import React from 'react'
import Colors from '../colors'
import OrderInfo from '../components/OrderInfo'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import OrderItem from '../components/OrderItem'
import OrderModel from '../components/OrderModel'

function OrderScreen() {
	return (
		<Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
			<Box>
				<ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
					<OrderInfo
						title='SHIPPING INFO'
						subTitle='Shipping: Tanzania'
						success
						text='Pay Method: Paypal'
						icon={
							<FontAwesome5
								name='shipping-fast'
								size={30}
								color={Colors.white}
							/>
						}
					/>
					<OrderInfo
						title='DELIVER TO'
						subTitle='Adress: '
						danger
						text='Arusha Tz, Ngaramtoni Crater, P.0 BOX 1234'
						icon={
							<Ionicons name='location-sharp' size={30} color={Colors.white} />
						}
					/>
				</ScrollView>
			</Box>
			{/* Order item */}
			<Box px={6} flex={1} pb={3}>
				<Heading bold fontSize={15} isTruncated my={4}>
					PRODUCTS
				</Heading>
				<OrderItem />
				{/* TOTAL */}
				<OrderModel />
			</Box>
		</Box>
	)
}

export default OrderScreen
