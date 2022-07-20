import { TailwindProvider } from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home/Home'
import Restaurant from './pages/Restaurant/Restaurant'
import Category from './pages/Category/Category'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='HomePage' component={Home} />
          <Stack.Screen name='RestaurantPage' component={Restaurant} />
          <Stack.Screen name='CategoryPage' component={Category} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}

export default App
