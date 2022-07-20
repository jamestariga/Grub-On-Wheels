import { View, Text, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from '../Card/RestaurantCard'
import sanityClient from '../../sanity'

const Featured = (props) => {
  const { id, title, description } = props
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == "${id}"] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]
        `,
        { id }
      )
      .then((res) => setRestaurants(res?.restaurants))
  }, [id])

  const renderItem = ({ item }) => {
    return (
      <RestaurantCard
        id={item._id}
        title={item.name}
        img={item.image}
        rating={item.rating}
        genre={item.type?.name}
        address={item.address}
        description={item.short_description}
        dishes={item.dishes}
        long={item.long}
        lat={item.lat}
      />
    )
  }

  return (
    <View>
      <View className='flex-row mt-4 items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={20} color='#00CCBB' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        className='pt-4'
      />
    </View>
  )
}

export default Featured
