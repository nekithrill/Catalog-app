import React from 'react'
import {
	FlatList,
	HStack,
	Pressable,
	Center,
	VStack,
	Text,
	Box,
	Image,
	Button
} from 'native-base'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import products from '../data/Products'

const OrderItem = () => {
	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			data={products}
			keyExtractor={item => item._id}
			renderItem={({ item }) => (
				<Pressable>
					<Box mb={3}>
						<HStack
							alignItems='center'
							bg={Colors.white}
							shadow={1}
							rounded={10}
							overflow='hidden'
							p={4}
						>
							<Center w='25%' bg={Colors.deepGray}>
								<Image
									source={{ uri: item.image }}
									alt={item.name}
									w='full'
									h={24}
									resizeMode='contain'
								/>
							</Center>
							<VStack w='60%' px={2}>
								<Text isTruncated color={Colors.black} bold fontSize={14}>
									{item.name}
								</Text>
								<Text color={Colors.gray} bold mt={2}>
									${item.price}
								</Text>
							</VStack>
							<Center>
								<Button
									bg={Colors.main}
									_pressed={{ bg: Colors.main }}
									_text={{ color: Colors.white }}
								>
									5
								</Button>
							</Center>
						</HStack>
					</Box>
				</Pressable>
			)}
		></FlatList>
	)
}

export default OrderItem
