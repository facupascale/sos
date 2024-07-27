import { Stack, useRouter } from 'expo-router'
import { TouchableOpacity, Text } from 'react-native'

import { Colors } from '@/constants'

export const unstable_settings = {
  initialRouteName: 'createAccount',
}
const Auth = () => {
  const router = useRouter()
  //  TODO: MODIFICAR EL BOTON DE GO BACK PARA QUE SE VEA BONITO
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        contentStyle: { backgroundColor: Colors.primary },
        headerStyle: { backgroundColor: Colors.primary },
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ marginRight: 10 }}>Go to Signup</Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Registro',
          headerTintColor: 'white',
          headerBackButtonMenuEnabled: true,
        }}
      />
      <Stack.Screen name="verification" />
    </Stack>
  )
}

export default Auth
