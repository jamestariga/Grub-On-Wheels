import { FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import sanityClient from '../../sanity'
import { categorySchema } from '../../utils/schema'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const schema = categorySchema()

  useEffect(() => {
    sanityClient.fetch(schema).then((res) => setCategories(res))
  }, [])

  // console.log(categories)

  const renderItem = ({ item }) => {
    return (
      <Card
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
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item._id.toString()}
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
