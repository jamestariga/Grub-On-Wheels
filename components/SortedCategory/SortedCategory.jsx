import { View } from 'react-native'
import { useEffect, useState } from 'react'
import sanityClient from '../../sanity'
import SortedCategoryCard from '../Card/SortedCategoryCard'
import { sortedCategorySchema } from '../../utils/schema'

const SortedCategory = (props) => {
  const { id } = props

  const [categories, setCategories] = useState([])

  const schema = sortedCategorySchema(id)

  useEffect(() => {
    sanityClient
      .fetch(schema, { id })
      .then((res) => setCategories(res?.restaurants))
  }, [id])

  // console.log(categories)

  return (
    <View className='flex-1'>
      {categories.map((category) => (
        <SortedCategoryCard
          key={category._id}
          id={category._id}
          title={category.name}
          img={category.image}
          rating={category.rating}
          genre={category.type?.name}
          address={category.address}
          description={category.short_description}
          dishes={category.dishes}
          long={category.long}
          lat={category.lat}
        />
      ))}
    </View>
  )
}

export default SortedCategory
