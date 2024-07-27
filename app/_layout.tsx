import { useFonts } from 'expo-font'
import { Stack, router } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { setStatusBarStyle } from 'expo-status-bar'
import { useEffect } from 'react'

import '../global.css'
import { Colors } from '@/constants'

import 'react-native-reanimated'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('../assets/fonts/Roboto-MediumItalic.ttf'),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      setStatusBarStyle('light', true)
      SplashScreen.hideAsync()
      router.replace('/auth/login')
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  // TODO: Arreglar el status bar => color

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
