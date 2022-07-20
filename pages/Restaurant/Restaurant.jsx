import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { urlFor } from '../../sanity'
import {
  ArrowLeftIcon,
  StarIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
} from 'react-native-heroicons/solid'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import DishesCard from '../../components/Card/DishesCard'

const Restaurant = () => {
  const {
    params: {
      id,
      title,
      img,
      rating,
      genre,
      address,
      description,
      dishes,
      long,
      lat,
    },
  } = useRoute()

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  // Bottom padding for Android
  const androidBottom = 50

  // Bottom padding for iOS
  const iosBottom = 75

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: Platform.OS === 'android' ? androidBottom : iosBottom,
      }}
    >
      <View className='relative'>
        <Image
          source={{ uri: urlFor(img).url() }}
          className='w-full h-56 bg-gray-300 p4'
        />
        <TouchableOpacity
          className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color='#00CCBB' />
        </TouchableOpacity>
      </View>

      <View className='bg-white'>
        <View className='px-4 pt-4'>
          <Text className='font-bold text-3xl'>{title}</Text>
          <View className='flex-row space-x-2 my-1'>
            <View className='flex-row items-center space-x-1'>
              <StarIcon size={22} color='green' opacity={0.5} />
              <Text className='text-xs text-gray-500'>
                <Text className='text-green-500'>{rating}</Text> · {genre}
              </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              <LocationMarkerIcon size={22} color='gray' opacity={0.5} />
              <Text className='text-xs text-gray-500'>Nearby · {address}</Text>
            </View>
          </View>
          <Text className='text-gray-500 mt-2 pb-4'>{description}</Text>
        </View>

        <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
          <QuestionMarkCircleIcon ize={22} color='gray' opacity={0.5} />
          <Text className='pl-2 flex-1 text-md font-bold'>
            Have a food allergy?
          </Text>
          <ChevronRightIcon color='#00CCBB' />
        </TouchableOpacity>
      </View>

      <View>
        <Text className='px-4 pt-6 mb-3 font-bold'>Menu</Text>

        {dishes?.map((dish) => (
          <DishesCard
            key={dish._id}
            id={dish._id}
            name={dish.name}
            image={dish.image}
            price={dish.price}
            description={dish.short_description}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default Restaurant
