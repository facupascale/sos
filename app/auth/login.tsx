import { useRouter } from 'expo-router'
import { View, Image, SafeAreaView } from 'react-native'

import {
  CustomButton,
  CustomText,
  CustomTextInput,
  CustomDivider,
  CustomKeyboardAvoiding,
} from '@/components'
import { useFormInputs, useDynamicRefs } from '@/hooks'
import { InputUtils } from '@/utils'

// TODO: falta agregar validaciones de los campos ingresados, manejo de esos datos en el backend
const Login = () => {
  const router = useRouter()
  const { inputs, setValue, setError } = useFormInputs('login')
  const { refs, focusNextField } = useDynamicRefs(inputs)
  const { validateEmail, validatePassword, getInputValue } = InputUtils

  const handleLogin = () => {
    const emailValue = getInputValue(inputs, 'email')
    const passwordValue = getInputValue(inputs, 'password')

    const isEmailValid = validateEmail(emailValue)
    const isPasswordValid = validatePassword(passwordValue)

    const emailError = !isEmailValid ? 'Email inválido' : ''
    const passwordError = !isPasswordValid
      ? 'La contraseña debe tener al menos 8 caracteres, una letra y un número'
      : ''

    setError('email', !isEmailValid, emailError)
    setError('password', !isPasswordValid, passwordError)

    if (isEmailValid && isPasswordValid) {
      // Aquí puedes agregar la lógica para el login
      console.log('Formulario válido, procediendo con el login')
    }
  }

  const navigateToRegister = () => {
    router.push('/auth/register')
  }
  console.log(inputs, 'inputs')

  return (
    <SafeAreaView className="flex-1">
      <Image
        source={require('../../assets/images/icon.png')}
        className="self-center my-10"
      />
      <View className="flex-1 w-full items-center">
        <View className="items-center mb-8">
          <CustomText size={24} color="white">
            Login
          </CustomText>
          <CustomText size={17} color="white" className="mt-2">
            Ingresa tu email y contraseña
          </CustomText>
        </View>
        <CustomKeyboardAvoiding className="w-full items-center">
          <View className="w-full items-center">
            {inputs.map((input, index) => (
              <CustomTextInput
                key={input.key}
                placeholder={input.placeholder}
                placeholderClassName="text-custom-red"
                isError={input.isError}
                errorMsg={input.errorMsg}
                value={input.value}
                onChangeText={(text) => setValue(input.key, text)}
                isSecure={input.key.toLowerCase().includes('password')}
                ref={refs[input.key]}
                onSubmitEditing={() =>
                  inputs.length - 1 !== index ? focusNextField(input.key) : null
                }
                returnKeyLabel={index !== inputs.length - 1 ? 'next' : 'done'}
              />
            ))}
          </View>
          <View className="w-full items-center gap-y-3">
            <CustomButton
              title="Login con Email"
              onPress={handleLogin}
              variant="solid"
              buttonClassName="w-[90%]"
            />
            <CustomButton
              title="Registrate"
              onPress={navigateToRegister}
              variant="outline"
              buttonClassName="w-[90%]"
            />
          </View>
        </CustomKeyboardAvoiding>

        <View className="w-full items-center justify-around flex-row mt-8">
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
          buttonClassName="bg-custom-white mt-8 w-[90%]"
          textColor="black"
        />
      </View>
    </SafeAreaView>
  )
}

export default Login
