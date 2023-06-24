import React from 'react'
import {
	Heading,
	Box,
	Text,
	VStack,
	FormControl,
	Select,
	CheckIcon,
	TextArea
} from 'native-base'
import Colors from '../colors'
import Rating from './Rating'
import Message from './notifications/Message'
import { useState } from 'react'
import Buttone from './Buttone'

export default function Review() {
	const [ratings, setRatings] = useState('')
	return (
		<Box mb={10}>
			<Heading bold fontSize={15} mb={2} mt={8}>
				REVIEW
			</Heading>
			{/* IF THERE IS NO REVIEW */}
			{/* <Message
				bold
				color={Colors.main}
				bg={Colors.deepestGray}
				size={12}
				children={'NO REVIEW'}
			/> */}

			{/* REVIEW */}
			<Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
				<Heading fontSize={15} color={Colors.black}>
					User Doe
				</Heading>
				<Rating value={4} />
				<Text mb={3} my={2}>
					Jan 12 2022
				</Text>
				<Message
					color={Colors.black}
					bg={Colors.white}
					size={12}
					children={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit Quam ipsam illum culpa molestiae a consectetur!'
					}
				/>
			</Box>
			{/* WRITE REVIEW */}
			{/* <Box mt={6}>
				<Heading bold fontSize={15} mb={2}>
					REVIEW THIS PRODUCT
				</Heading>
				<VStack space={6}>
					<FormControl>
						<FormControl.Label
							_text={{
								fontSize: '12px',
								fontWeight: 'bold'
							}}
						>
							Rating
						</FormControl.Label>
						<Select
							bg={Colors.deepestGray}
							borderWidth={0}
							rounded={5}
							py={3}
							placeholder='Choose Rate'
							_selectedItem={{
								bg: Colors.deepestGray,
								endIcon: <CheckIcon size={3} />
							}}
							selectedValue={ratings}
							onValueChange={e => setRatings(e)}
						>
							<Select.Item label='1 - Bad' value='1' />
							<Select.Item label='2 - Poor' value='2' />
							<Select.Item label='3 - Fair' value='3' />
							<Select.Item label='4 - Good' value='4' />
							<Select.Item label='5 - Great' value='5' />
						</Select>
					</FormControl>
					<FormControl>
						<FormControl.Label
							_text={{
								fontSize: '12px',
								fontWeight: 'bold'
							}}
						>
							Comment
						</FormControl.Label>
						<TextArea
							h={24}
							w='full'
							placeholder='This product is good...'
							borderWidth={0}
							bg={Colors.deepestGray}
							py={4}
						/>
					</FormControl>
					<Buttone bg={Colors.main} color={Colors.white}>
						SUMBIT
					</Buttone>

					<Message
						color={Colors.white}
						bg={Colors.black}
						size={12}
						children={'Please login to write a review'}
					/>
				</VStack>
			</Box> */}
		</Box>
	)
}
