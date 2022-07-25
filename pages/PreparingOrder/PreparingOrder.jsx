import { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import orderAnimation from '../../assets/images/orderAnimation.gif'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrder = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryPage')
    }, 4000)

    return () => {
      clearTimeout()
    }
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-[#00CCBB] justify-center items-center'>
      <Animatable.Image
        source={orderAnimation}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96'
      />

      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
      >
        Preparing your order. Please wait...
      </Animatable.Text>

      <Animatable.Text></Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrder
