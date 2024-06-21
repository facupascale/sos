import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const CreateAccount = () => {
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
        <Text>create account</Text>
        <Link href="/auth/register/verification">Go to verification</Link>
      </View>
    </View>
  )
}

export default CreateAccount
