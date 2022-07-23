import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../features/cartSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter'

const Cart = () => {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const navigation = useNavigation()

  if (items.length === 0) return null

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity
        onPress={() => navigation.navigate('OrderPage')}
        className='flex-row items-center space-x-1 rounded-lg p-4 mx-5 bg-[#00CCBB]'
      >
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-lg'>
          {items.length}
        </Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>
          View Cart
        </Text>
        <Text className='text-lg text-white font-extrabold'>
          <Currency quantity={total} currency='CAD' />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart
