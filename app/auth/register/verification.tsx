import { useRouter } from 'expo-router'
import { View } from 'react-native'

import {
  CustomTextInput,
  CustomText,
  CustomButton,
  CustomKeyboardAvoiding,
} from '@/components'
import { useFormInputs } from '@/hooks'

const Verification = () => {
  const { inputs } = useFormInputs('verification')
  const router = useRouter()

  const handleSubmit = () => {
    router.navigate('/auth/login')
  }
  return (
    <View className="flex-1 items-center">
      <CustomText size={16} className="w-4/5 self-center text-center mt-6">
        Revisa tu casilla de correo e ingresa el código que recibiste
      </CustomText>
      <CustomKeyboardAvoiding className="w-full self-center items-center justify-center mt-6">
        {inputs.map((input) => (
          <CustomTextInput
            key={input.key}
            placeholder={input.placeholder}
            placeholderClassName="text-custom-red"
            isError={input.isError}
            errorMsg={input.errorMsg}
            isSecure={input.key.toLowerCase().includes('password')}
            onSubmitEditing={() => {}}
            returnKeyLabel="done"
          />
        ))}
      </CustomKeyboardAvoiding>
      <CustomButton title="Confirmar" onPress={handleSubmit} />
    </View>
  )
}

export default Verification
