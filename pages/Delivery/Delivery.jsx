import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../../features/restaurantSlice'
import { XIcon } from 'react-native-heroicons/solid'
import bikeDelivery from '../../assets/images/bikeDelivery.gif'
import * as Progress from 'react-native-progress'
import logo from '../../assets/images/logo.png'

const Delivery = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)

  const topPadding = Platform.OS === 'android' ? 10 : 0

  return (
    <View className={`bg-[#00CCBB] flex-1 pt-${topPadding}`}>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
            <XIcon size={30} color='white' />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>35-45 Minutes</Text>
            </View>
            <Image source={bikeDelivery} className='h-20 w-20' />
          </View>

          <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image
          source={logo}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'>James Tariga</Text>
          <Text className='text-gray-400'>Your Rider</Text>
        </View>
        <Text className='text-[#00CCBB] text-lg font-bold mr-5'>Contact</Text>
      </SafeAreaView>
    </View>
  )
}

export default Delivery
