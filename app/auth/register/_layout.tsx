import { Stack } from 'expo-router'

import { Colors } from '@/constants'

export const unstable_settings = {
  initialRouteName: 'createAccount',
}
const Auth = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: Colors.primary },
        headerStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Stack.Screen name="createAccount" />
      <Stack.Screen name="verification" />
    </Stack>
  )
}

export default Auth
