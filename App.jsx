import { TailwindProvider } from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home/Home'
import Restaurant from './pages/Restaurant/Restaurant'
import Category from './pages/Category/Category'
import { Provider } from 'react-redux'
import { store } from './store'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='HomePage' component={Home} />
            <Stack.Screen name='RestaurantPage' component={Restaurant} />
            <Stack.Screen name='CategoryPage' component={Category} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  )
}

export default App
