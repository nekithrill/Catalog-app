import React from 'react'
import Colors from '../colors'
import { HStack, Input, Pressable, Box } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function HomeSearch() {
	const navigation = useNavigation()
	return (
		<HStack
			space={3}
			w='full'
			px={6}
			bg={Colors.main}
			py={4}
			alignItems='center'
			safeAreaTop
		>
			<Input
				placeholder='Search request...'
				w='85%'
				bg={Colors.white}
				variant='filled'
				type='search'
				h={12}
				borderWidth={0}
				_focus={{ bg: Colors.white }}
			/>
			<Pressable ml={3} onPress={() => navigation.navigate('Cart')}>
				<MaterialIcons name='shopping-cart' size={24} color={Colors.white} />
				<Box
					px={2}
					rounded='full'
					position='absolute'
					top={-10}
					left={3}
					bg={Colors.red}
					_text={{ color: Colors.white, fontSize: '11px' }}
				>
					2
				</Box>
			</Pressable>
		</HStack>
	)
}

export default HomeSearch
