import { View, Text } from 'react-native'

const Verification = () => {
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
        <Text>Verification</Text>
      </View>
    </View>
  )
}

export default Verification
