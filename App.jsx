import { TailwindProvider } from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home/Home'
import Restaurant from './pages/Restaurant/Restaurant'
import Category from './pages/Category/Category'
import Order from './pages/Order/Order'
import PreparingOrder from './pages/PreparingOrder/PreparingOrder'
import Delivery from './pages/Delivery/Delivery'
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
            <Stack.Screen
              name='OrderPage'
              component={Order}
              options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen
              name='PreparingPage'
              component={PreparingOrder}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='DeliveryPage'
              component={Delivery}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  )
}

export default App
