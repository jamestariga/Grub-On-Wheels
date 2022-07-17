import { View, ScrollView, Text, FlatList } from 'react-native'
import Card from '../Card/Card'
import sushi from '../../assets/images/sushi.jpg'

const Categories = () => {
  const data = [
    { id: 1, title: 'Sushi', img: sushi },
    { id: 2, title: 'Sushi', img: sushi },
    { id: 3, title: 'Sushi', img: sushi },
    { id: 4, title: 'Sushi', img: sushi },
    { id: 5, title: 'Sushi', img: sushi },
    { id: 6, title: 'Sushi', img: sushi },
    { id: 7, title: 'Sushi', img: sushi },
    { id: 8, title: 'Sushi', img: sushi },
    { id: 9, title: 'Sushi', img: sushi },
    { id: 10, title: 'Sushi', img: sushi },
  ]

  const renderItem = ({ item }) => {
    return <Card img={item.img} title={item.title} />
  }

  return (
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
    />
  )
}

export default Categories
