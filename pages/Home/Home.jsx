import { useLayoutEffect, useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Platform,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logo from '../../assets/images/logo.png'
import { UserIcon, ChevronDownIcon } from 'react-native-heroicons/outline'
import Search from '../../components/Search/Search'
import Categories from '../../components/Categories/Categories'
import Featured from '../../components/Featured/Featured'
import sanityClient from '../../sanity'
import { featuredSchema } from '../../utils/schema'

const Home = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  const schema = featuredSchema()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    sanityClient.fetch(schema).then((res) => setFeaturedCategories(res))
  }, [])

  // Bottom padding for Android
  const androidBottom = 150

  // Bottom padding for iOS
  const iosBottom = 100

  return (
    <SafeAreaView className='bg-indigo-500 pt-5'>
      <View className='flex-row pb-3 items-center mx-4 px-2 space-x-2'>
        <Image source={logo} className='h-7 w-7 p-4 rounded-full bg-gray-300' />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>
      <Search />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'android' ? androidBottom : iosBottom,
        }}
        className='bg-gray-100'
      >
        <Categories />

        {featuredCategories?.map((category) => (
          <Featured
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
