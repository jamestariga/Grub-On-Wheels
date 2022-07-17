import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = (props) => {
  const { img, title } = props

  return (
    <TouchableOpacity className='relative mr-2'>
      <Image source={img} className='h-20 w-20 rounded' />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Card
