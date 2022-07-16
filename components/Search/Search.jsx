import { View, TextInput } from 'react-native'
import { SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'

const Search = () => {
  return (
    <View className='flex-row items-center space-x-2 px-4 pb-2 mx-4'>
      <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
        <SearchIcon color='#00CCBB' />
        <TextInput
          placeholder='Restaurants and Cuisines'
          keyboardType='default'
        />
      </View>
      <AdjustmentsIcon size={20} color='#00CCBB' />
    </View>
  )
}

export default Search
