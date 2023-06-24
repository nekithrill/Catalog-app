import { View, Text } from 'react-native'
import React from 'react'
import { Box, Button, HStack, Pressable, ScrollView } from 'native-base'
import Colors from '../../colors'

const Orders = () => {
	return (
		<Box h='full' bg={Colors.white} pt={5}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* Paid order */}
				<Pressable>
					<HStack
						space={4}
						justifyContent='space-between'
						alignItems='center'
						bg={Colors.subGreen}
						py={5}
						px={2}
					>
						<Text fontSize={9} color={Colors.blue} isTruncated>
							12333131
						</Text>
						<Text fontSize={12} bold color={Colors.black} isTruncated>
							PAID
						</Text>
						<Text fontSize={11} italic color={Colors.black} isTruncated>
							Dec 12 2022
						</Text>
						<Button
							px={7}
							py={1.5}
							rounded={50}
							bg={Colors.main}
							_text={{ color: Colors.white }}
							_pressed={{ bg: Colors.main }}
						>
							$456
						</Button>
					</HStack>
				</Pressable>

				<Pressable>
					<HStack
						space={4}
						justifyContent='space-between'
						alignItems='center'
						bg={Colors.white}
						py={5}
						px={2}
					>
						<Text fontSize={9} color={Colors.blue} isTruncated>
							12333131
						</Text>
						<Text fontSize={12} bold color={Colors.black} isTruncated>
							NOT PAID
						</Text>
						<Text fontSize={11} italic color={Colors.black} isTruncated>
							Jan 13 2022
						</Text>
						<Button
							px={7}
							py={1.5}
							rounded={50}
							bg={Colors.red}
							_text={{ color: Colors.white }}
							_pressed={{ bg: Colors.red }}
						>
							$23
						</Button>
					</HStack>
				</Pressable>
			</ScrollView>
		</Box>
	)
}

export default Orders
