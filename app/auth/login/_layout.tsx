import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <View className="bg-red-700 w-2/5 h-2/5 self-center align-center justify-center">
        <Text className="text-3xl  bg-sky-800 self-center">Login</Text>
        <Link replace href="/auth/register/createAccount">
          Go to register
        </Link>
      </View>
    </View>
  )
}

export default Login
