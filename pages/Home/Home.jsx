import { useLayoutEffect } from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logo from '../../assets/images/logo.png'
import { UserIcon, ChevronDownIcon } from 'react-native-heroicons/outline'
import Search from '../../components/Search/Search'

const Home = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-indigo-500 pt-5'>
      <Text className='text-red-500'>
        <View className='flex-row pb-3 items-center mx-4 px-4 space-x-2'>
          <Image
            source={logo}
            className='h-7 w-7 p-4 rounded-full bg-gray-300'
          />
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver Now!
            </Text>
            <Text className='font-bold text-xl'>
              Current Location
              <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
          </View>
          <UserIcon size={35} color='#00CCBB' />
        </View>
        <Search />
      </Text>
    </SafeAreaView>
  )
}

export default Home
