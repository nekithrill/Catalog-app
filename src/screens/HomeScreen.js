import { Box } from 'native-base'
import React from 'react'
import Colors from '../colors'
import HomeProducts from '../components/HomeProducts'
import HomeSearch from '../components/HomeSearch'

function HomeScreen() {
	return (
		<Box flex={1} bg={Colors.subGreen}>
			<HomeSearch />
			<HomeProducts />
		</Box>
	)
}

export default HomeScreen
