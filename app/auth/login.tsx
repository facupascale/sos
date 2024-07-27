import { useRouter } from 'expo-router'
import { useRef } from 'react'
import { View, Image, SafeAreaView } from 'react-native'

import {
  CustomButton,
  CustomText,
  CustomTextInput,
  CustomDivider,
  CustomKeyboardAvoiding,
  CustomTextInputRef,
} from '@/components'
import { useFormInputs } from '@/hooks'

const Login = () => {
  const router = useRouter()
  const { inputs } = useFormInputs()
  const emailRef = useRef<CustomTextInputRef>(null)
  const passwordRef = useRef<CustomTextInputRef>(null)

  const navigateToRegister = () => {
    router.push('/auth/register')
  }

  return (
    <SafeAreaView className="flex-1 ">
      <Image
        source={require('../../assets/images/icon.png')}
        className="self-center my-15"
      />
      <View className="w-full h-2/4 self-center items-center justify-around">
        <View className="items-center">
          <CustomText size={24} color="white">
            Login
          </CustomText>
          <CustomText size={17} color="white" className="mt-2">
            Ingresa tu email y contraseña
          </CustomText>
        </View>
        <CustomKeyboardAvoiding className="w-full h-3/5 items-center justify-around">
          {inputs.login.map((input, index) => (
            <CustomTextInput
              placeholder={input.placeholder}
              placeholderClassName="text-custom-red"
              isError={input.isError}
              errorMsg={input.errorMessage}
              isSecure={input.key.toLowerCase().includes('password')}
              ref={input.key === 'email' ? emailRef : passwordRef}
              onSubmitEditing={() =>
                input.key === 'email' ? passwordRef.current?.focus() : null
              }
              returnKeyLabel={
                index !== inputs.login.length - 1 ? 'next' : 'done'
              }
            />
          ))}
          <CustomButton
            title="Login con Email"
            onPress={() => {}}
            variant="solid"
          />
          <CustomButton
            title="Registrate"
            onPress={navigateToRegister}
            variant="outline"
          />
        </CustomKeyboardAvoiding>
        <View className="w-4/5 items-center justify-around flex-row">
          <CustomDivider width="half" />
          <CustomText size={14} color="grey">
            o podes continuar con
          </CustomText>
          <CustomDivider width="half" />
        </View>
        <CustomButton
          title="Google"
          onPress={() => {}}
          icon="google"
          variant="solid"
          buttonClassName="bg-custom-white"
          textColor="black"
        />
      </View>
    </SafeAreaView>
  )
}

export default Login
