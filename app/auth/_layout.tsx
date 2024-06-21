import { Stack } from 'expo-router'

import { Colors } from '@/constants'

export const unstable_settings = {
  initialRouteName: 'login',
}

const Auth = () => {
  return (
    <Stack
      screenOptions={{ contentStyle: { backgroundColor: Colors.primary } }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  )
}

export default Auth
