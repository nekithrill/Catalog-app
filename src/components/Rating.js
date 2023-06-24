import React from 'react'
import { HStack, Text } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import Colors from '../colors'

function Rating({ value, text }) {
	const size = 8
	const color = Colors.orange
	return (
		<HStack space={0.4} mt={1} alignItems='center'>
			<MaterialIcons
				name={value >= 1 ? 'star' : value >= 0.5 ? 'star-half' : 'star-outline'}
				size={size}
				color={color}
			/>
			<MaterialIcons
				name={value >= 2 ? 'star' : value >= 1.5 ? 'star-half' : 'star-outline'}
				size={size}
				color={color}
			/>
			<MaterialIcons
				name={value >= 3 ? 'star' : value >= 2.5 ? 'star-half' : 'star-outline'}
				size={size}
				color={color}
			/>
			<MaterialIcons
				name={value >= 4 ? 'star' : value >= 3.5 ? 'star-half' : 'star-outline'}
				size={size}
				color={color}
			/>
			<MaterialIcons
				name={value >= 5 ? 'star' : value >= 4.5 ? 'star-half' : 'star-outline'}
				size={size}
				color={color}
			/>
			{text && (
				<Text fontSize={12} ml={2}>
					{text}
				</Text>
			)}
		</HStack>
	)
}

export default Rating
