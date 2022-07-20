import { Text, Image, TouchableOpacity } from 'react-native'
import { urlFor } from '../../sanity'
import { useNavigation } from '@react-navigation/native'

const Card = (props) => {
  const { id, title, img } = props

  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className='relative mr-2'
      onPress={() => {
        navigation.navigate('CategoryPage', {
          id,
          title,
          img,
        })
      }}
    >
      <Image
        source={{
          uri: urlFor(img).url(),
        }}
        className='h-20 w-20 rounded'
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Card
