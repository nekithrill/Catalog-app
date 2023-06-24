import React from 'react'
import Colors from '../colors'
import products from '../data/Products'
import {
	Heading,
	ScrollView,
	Flex,
	Pressable,
	Image,
	Box,
	Text
} from 'native-base'
import Rating from './Rating'
import { useNavigation } from '@react-navigation/native'

function HomeProducts() {
	const navigation = useNavigation()
	return (
		<ScrollView flex={1} showsVerticalScrollIndicator={false}>
			<Flex
				flexWrap='wrap'
				direction='row'
				justifyContent='space-between'
				px={6}
				mt={3}
			>
				{products.map(product => (
					<Pressable
						onPress={() => navigation.navigate('Product', product)}
						key={product._id}
						w='47%'
						bg={Colors.white}
						rounded='md'
						shadow={2}
						pt={0}
						my={3}
						pb={2}
						overflow='hidden'
					>
						<Image
							source={{ uri: product.image }}
							alt={product.name}
							w='full'
							h={24}
							resizeMode='contain'
						/>
						<Box px={4} pt={1}>
							<Heading size='sm' bold>
								${product.price}
							</Heading>
							<Text fontSize={10} mt={1} isTruncated w='full'>
								{product.name}
							</Text>
							{/* RATING */}
							<Rating value={product.rating} />
						</Box>
					</Pressable>
				))}
			</Flex>
		</ScrollView>
	)
}

export default HomeProducts
