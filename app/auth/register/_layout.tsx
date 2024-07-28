import { FontAwesome } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'

import { Colors } from '@/constants'

export const unstable_settings = {
  initialRouteName: 'createAccount',
}
const Auth = () => {
  const router = useRouter()
  //  TODO: MODIFICAR EL BOTON DE GO BACK PARA QUE SE VEA BONITO
  return (
    <Stack
      screenOptions={() => ({
        contentStyle: { backgroundColor: Colors.primary },
        headerStyle: { backgroundColor: Colors.primary },
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Registro',
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="verification"
        options={{
          headerTitle: 'Verificacion de cuenta',
          headerTintColor: 'white',
        }}
      />
    </Stack>
  )
}

export default Auth
