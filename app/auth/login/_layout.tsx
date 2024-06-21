import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: 'red',
          width: '50%',
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <Text>Login</Text>
        <Link replace href="/auth/register/createAccount">
          Go to register
        </Link>
      </View>
    </View>
  )
}

export default Login
