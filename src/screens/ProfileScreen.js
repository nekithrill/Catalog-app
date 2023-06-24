import { Center, Heading, Image, Text } from 'native-base'
import React from 'react'
import Colors from '../colors'
import Tabs from '../components/profile/Tabs'

function ProfileScreen() {
	return (
		<>
			<Center bg={Colors.main} pt={10} pb={6}>
				<Image
					source={{
						uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png'
					}}
					alt='Profile'
					w={24}
					h={24}
					resizeMode='cover'
				/>
				<Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
					Admin Doe
				</Heading>
				<Text italic fontSize={10} color={Colors.white}>
					Joined Dec 12 2022
				</Text>
			</Center>

			{/* TABS */}
			<Tabs />
		</>
	)
}

export default ProfileScreen
