import { useRouter } from 'expo-router'
import { View } from 'react-native'

import {
  CustomTextInput,
  CustomText,
  CustomKeyboardAvoiding,
  CustomButton,
} from '@/components'
import { useFormInputs, useDynamicRefs } from '@/hooks'

const CreateAccount = () => {
  const router = useRouter()
  const { inputs } = useFormInputs('register')
  const { refs, focusNextField } = useDynamicRefs(inputs)

  const handleOnSubmit = () => router.navigate('/auth/register/verification')
  return (
    <View className="w-full h-full justify-around items-center">
      <View className="w-full items-center">
        <CustomText size={19} className="mb-2">
          Crea tu cuenta
        </CustomText>
        <CustomText size={17}>Ingresá los datos requeridos</CustomText>
      </View>
      <CustomKeyboardAvoiding>
        {inputs.map((input, index) => (
          <CustomTextInput
            key={input.key}
            placeholder={input.placeholder}
            isError={input.isError}
            errorMsg={input.errorMsg}
            isSecure={input.key.toLowerCase().includes('password')}
            ref={refs[input.key]}
            onSubmitEditing={() =>
              inputs.length - 1 !== index ? focusNextField(input.key) : null
            }
            returnKeyLabel={index !== inputs.length - 1 ? 'next' : 'done'}
            className="mb-5"
          />
        ))}
      </CustomKeyboardAvoiding>
      <CustomButton title="Confirmar" onPress={handleOnSubmit} />
    </View>
  )
}

export default CreateAccount
