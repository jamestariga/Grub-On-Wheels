import { View, TextInput } from 'react-native'
import { useState } from 'react'
import { SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <View className='flex-row items-center space-x-2 px-2 pb-2 mx-4'>
      <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-xl'>
        <SearchIcon color='#00CCBB' />
        <TextInput
          className='flex-1 text-blue-400 placeholder:text-black'
          placeholder='Restaurants and Cuisines'
          keyboardType='default'
          defaultValue={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <AdjustmentsIcon size={20} color='#00CCBB' />
    </View>
  )
}

export default Search
