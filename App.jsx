import { TailwindProvider } from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home/Home'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='HomePage' component={Home} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}

export default App
