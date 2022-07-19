import { FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import sanityClient from '../../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"]
      `
      )
      .then((res) => setCategories(res))
  }, [])

  const renderItem = ({ item }) => {
    return <Card img={item.image} title={item.name} />
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
