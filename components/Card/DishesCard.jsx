import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { urlFor } from '../../sanity'
import Currency from 'react-currency-formatter'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  selectCartItemsWithId,
  removeFromCart,
} from '../../features/cartSlice'

const DishesCard = (props) => {
  const { id, image, name, description, price } = props
  const [isPressed, setIsPressed] = useState(false)

  const dispatch = useDispatch()
  const items = useSelector((state) => selectCartItemsWithId(state, id))
  // console.log(items)

  const addItemsToCart = () => {
    dispatch(addToCart({ id, image, name, description, price }))
  }

  const removeItemsFromCart = () => {
    if (!items.length > 0) return

    dispatch(removeFromCart({ id }))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>
              <Currency quantity={price} currency='CAD' />
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{ uri: urlFor(image).url() }}
              className='h-20 w-20 bg-gray-300 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity onPress={removeItemsFromCart}>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemsToCart}>
              <PlusCircleIcon
                size={40}
                color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishesCard
