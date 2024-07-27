import { FontAwesome } from '@expo/vector-icons'
import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import { CustomText } from '../CustomText'

interface CustomTextInputProps extends TextInputProps {
  isError: boolean
  errorMsg: string
  isSecure: boolean
}

export type CustomTextInputRef = {
  focus: () => void
}

const CustomTextInput = forwardRef<CustomTextInputRef, CustomTextInputProps>(
  ({ isError, errorMsg, isSecure, ...props }, ref) => {
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(false)
    const localRef = useRef<TextInput>(null)

    useImperativeHandle(ref, () => ({
      focus: () => {
        localRef.current?.focus()
      },
    }))
    return (
      <View className="w-4/5 flex-row justify-center align-center">
        <TextInput
          ref={localRef}
          {...props}
          className="bg-custom-white w-full h-10 rounded px-2 font-roboto-mediumItalic"
          secureTextEntry={secureTextEntry}
        />
        {isSecure && (
          <FontAwesome
            name={secureTextEntry ? 'eye' : 'eye-slash'}
            size={20}
            color="grey"
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            className="self-center absolute right-0 mr-3"
          />
        )}
        {!isError && (
          <CustomText size={14} color="red" className="mt-1 font-semibold">
            {errorMsg}
          </CustomText>
        )}
      </View>
    )
  },
)

export { CustomTextInput }
