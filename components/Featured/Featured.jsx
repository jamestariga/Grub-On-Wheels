import { View, Text, FlatList, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from '../Card/RestaurantCard'
import sushi from '../../assets/images/sushi.jpg'

const Featured = (props) => {
  const { id, title, description } = props

  const data = [
    { id: 1, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 2, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 3, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 4, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 5, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 6, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 7, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 8, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 9, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
    { id: 10, title: 'Sushi', img: sushi, rating: 4.5, genre: 'Japanese' },
  ]

  const renderItem = ({ item }) => {
    return (
      <RestaurantCard
        title={item.title}
        img={item.img}
        rating={item.rating}
        genre={item.genre}
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
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
