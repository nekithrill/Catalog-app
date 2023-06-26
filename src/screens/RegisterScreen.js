import {
	Box,
	Button,
	Heading,
	Image,
	Input,
	Pressable,
	Text,
	VStack
} from 'native-base'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Colors from '../colors'

function RegisterScreen({ navigation }) {
	return (
		<Box flex={1} bg={Colors.black}>
			<Image
				flex={1}
				alt='LOGO'
				resizeMode='cover'
				size='lg'
				w='full'
				source={require('../../assets/cover.png')}
			></Image>
			<Box
				w='full'
				h='full'
				position='absolute'
				top='24%'
				px='6'
				justifyContent='center'
			>
				<Heading>SIGN UP</Heading>
				<VStack space={5} pt='6'>
					{/* USERNAME */}
					<Input
						InputLeftElement={
							<MaterialIcons name='person' size={20} color={Colors.main} />
						}
						variant='underlined'
						placeholder='user@gmail.com'
						w='70%'
						type='text'
						pl={2}
						color={Colors.main}
						borderBottomColor={Colors.underline}
					/>
					{/* EMAIL */}
					<Input
						InputLeftElement={
							<MaterialIcons name='email' size={20} color={Colors.main} />
						}
						variant='underlined'
						placeholder='user@gmail.com'
						w='70%'
						type='text'
						pl={2}
						color={Colors.main}
						borderBottomColor={Colors.underline}
					/>
					{/* PASSWORD */}
					<Input
						InputLeftElement={
							<MaterialIcons
								name='remove-red-eye'
								size={20}
								color={Colors.main}
							/>
						}
						variant='underlined'
						placeholder='********'
						w='70%'
						type='password'
						pl={2}
						color={Colors.main}
						borderBottomColor={Colors.underline}
					/>
				</VStack>
				<Button
					_pressed={{ bg: Colors.main }}
					my={30}
					w='40%'
					rounded={50}
					bg={Colors.main}
					_text={{ color: Colors.white }}
					onPress={() => navigation.navigate('Bottom')}
				>
					SIGN UP
				</Button>
				<Pressable mt={4} onPress={() => navigation.navigate('Login')}>
					<Text color={Colors.deepestGray} size='sm'>
						SIGN UP
					</Text>
				</Pressable>
			</Box>
		</Box>
	)
}

export default RegisterScreen
