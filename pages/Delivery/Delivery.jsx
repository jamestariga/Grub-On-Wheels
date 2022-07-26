import { useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../../features/restaurantSlice'
import { selectLocation } from '../../features/locationSlice'
import { XIcon } from 'react-native-heroicons/solid'
import bikeDelivery from '../../assets/images/bikeDelivery.gif'
import * as Progress from 'react-native-progress'
import logo from '../../assets/images/logo.png'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { formatter } from '../../utils/helper'

const Delivery = () => {
  const [distance, setDistance] = useState(null)

  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const location = useSelector(selectLocation)
  const mapRef = useRef()

  // console.log(location)

  const restaurantLocation = {
    latitude: restaurant.lat,
    longitude: restaurant.long,
  }

  const userLocation = {
    latitude: location.latitude,
    longitude: location.longitude,
  }

  const onRenderMap = () => {
    setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
        edgePadding: { top: 200, right: 50, bottom: 100, left: 50 },
      })
    }, 500)

    return () => clearTimeout()
  }

  useEffect(() => {
    if (!location || !restaurant) return

    const getDistance = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial
        &destinations=${location.latitude},${location.longitude}
        &origins=${restaurant.lat},${restaurant.long}
        &key=${GOOGLE_MAPS_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.rows[0].elements[0])
          const duration = data.rows[0].elements[0]
          setDistance(duration)
        })
    }

    getDistance()
  }, [])

  const formattedDistance = formatter(distance?.duration.text)

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
              <Text className='text-4xl font-bold'>
                {formattedDistance} Minutes
              </Text>
            </View>
            <Image source={bikeDelivery} className='h-20 w-20' />
          </View>

          <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />

          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        ref={mapRef}
        onLayout={onRenderMap}
        mapPadding={{ bottom: 50 }}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <MapViewDirections
          origin={restaurantLocation}
          destination={userLocation}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor='#00CCBB'
        />
        <Marker
          coordinate={restaurantLocation}
          title='Origin'
          description={restaurant.description}
          identifier='origin'
          pinColor='#00CCBB'
        />
        <Marker
          coordinate={userLocation}
          title='Destination'
          description={'You are here'}
          identifier='destination'
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
