import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../../features/restaurantSlice'
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  clearCart,
} from '../../features/cartSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import logo from '../../assets/images/logo.png'
import { urlFor } from '../../sanity'
import Currency from 'react-currency-formatter'

const Order = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  const [groupedItemsInCart, setGroupedItemsInCart] = useState([])

  // if the value of items did not change, then we don't need to re-render the component
  useEffect(() => {
    /* Grouping the items in the cart by their id. */
    const groupedItems = items.reduce((results, item) => {
      // Creates an empty object to store the grouped items in the cart
      const result = (results[item.id] = results[item.id] || [])
      result.push(item)
      return results
    }, {})

    setGroupedItemsInCart(groupedItems)
  }, [items])

  // handle clear cart
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <SafeAreaView className='flex-1 bg-white pt-10'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Cart</Text>
            <Text className='text-center text-gray-400'>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-gray-100 absolute top-3 right-5'
          >
            <XCircleIcon height={50} width={50} color='#00CCBB' />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={logo}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <Text className='flex-1'>Deliver in 30-45 min</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItemsInCart).map(([key, items]) => (
            <View
              key={key}
              className='flex-row items-center space-x-3 py-2 px-5 bg-white'
            >
              <Text className='text-[#00CCBB]'>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1'>{items[0]?.name} x</Text>
              <Text className='text-gray-600'>
                <Currency quantity={items[0]?.price} currency='CAD' />
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({ id: key }))}
              >
                <Text className='text-[#00CCBB]'>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
          {items.length > 0 ? (
            <View className='flex-1 items-center bg-white'>
              <TouchableOpacity
                onPress={handleClearCart}
                className='flex-row items-center space-x-4 py-3 px-5 bg-white'
              >
                <Text className='text-[#00CCBB]'>Clear Cart</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className='flex-1 items-center bg-white p-6'>
              <Text className='text-center text-gray-600'>
                Your cart is empty
              </Text>
            </View>
          )}
        </ScrollView>

        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>
              <Currency quantity={totalPrice} currency='CAD' />
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>
              <Currency quantity={2.99} currency='CAD' />
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-black font-bold'>Total</Text>
            <Text className='text-black font-extrabold'>
              <Currency quantity={totalPrice + 2.99} currency='CAD' />
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('PreparingPage')}
            className='rounded-lg bg-[#00CCBB] p-4'
          >
            <Text className='font-bold text-center text-lg text-white'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Order
