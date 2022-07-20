import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../../sanity'
import SortedCategory from '../../components/SortedCategory/SortedCategory'

const Category = () => {
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
      <Text className='text-xl font-bold p-2'>{title}</Text>

      <View className='px-4'>
        <SortedCategory
          id={id}
          title={title}
          img={img}
          rating={rating}
          genre={genre}
          address={address}
          description={description}
          dishes={dishes}
          long={long}
          lat={lat}
        />
      </View>
    </ScrollView>
  )
}

export default Category
