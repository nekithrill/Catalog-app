import {
	Button,
	Center,
	Box,
	Text,
	Pressable,
	HStack,
	Image,
	VStack
} from 'native-base'
import React from 'react'
import products from '../data/Products'
import Colors from '../colors'
import { Entypo } from '@expo/vector-icons'
import { SwipeListView } from 'react-native-swipe-list-view'

const Swiper = () => (
	<SwipeListView
		rightOpenValue={-50}
		previewRowKey='0'
		previewOpenValue={-40}
		previewOpenDelay={3000}
		data={products.slice(0, 2)}
		renderItem={renderItems}
		renderHiddenItem={hiddenItems}
		showsVerticalScrollIndicator={false}
	/>
)

const renderItems = data => (
	<Pressable>
		<Box ml={6} mb={3}>
			<HStack
				alignItems='center'
				bg={Colors.white}
				shadow={1}
				rounded={10}
				overflow='hidden'
			>
				<Center w='25%' bg={Colors.deepGray}>
					<Image
						source={{ uri: data.item.image }}
						alt={data.item.name}
						w='full'
						h={24}
						resizeMode='contain'
					/>
				</Center>
				<VStack w='60%' px={2} space={2}>
					<Text isTruncated color={Colors.black} bold fontSize={14}>
						{data.item.name}
					</Text>
					<Text bold color={Colors.gray}>
						${data.item.price}
					</Text>
				</VStack>
				<Center>
					<Button
						bg={Colors.main}
						_pressed={{ bg: Colors.main }}
						_text={{ color: Colors.white }}
					>
						1
					</Button>
				</Center>
			</HStack>
		</Box>
	</Pressable>
)

const hiddenItems = () => (
	<Pressable
		w={50}
		roundedTopRight={10}
		roundedBottomRight={10}
		h='88%'
		ml='auto'
		justifyContent='center'
		bg={Colors.red}
	>
		<Center alignItems='center' space={3} px={2}>
			<Entypo name='trash' size={24} color={Colors.white} />
		</Center>
	</Pressable>
)

const CartItems = () => {
	return (
		<Box mr={6}>
			<Swiper />
		</Box>
	)
}

export default CartItems
