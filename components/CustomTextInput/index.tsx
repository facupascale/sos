import { FontAwesome } from '@expo/vector-icons'
import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import { CustomText } from '../CustomText'

export interface CustomTextInputProps extends TextInputProps {
  key: string
  isError: boolean
  errorMsg: string
  isSecure: boolean
}

export type CustomTextInputRef = {
  focus: () => void
}

const CustomTextInput = forwardRef<CustomTextInputRef, CustomTextInputProps>(
  ({ isError, errorMsg, isSecure, ...props }, ref) => {
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)
    const localRef = useRef<TextInput>(null)

    useImperativeHandle(ref, () => ({
      focus: () => {
        localRef.current?.focus()
      },
    }))
    return (
      <View className="w-4/5 mb-5 flex-row justify-center align-center">
        <TextInput
          ref={localRef}
          {...props}
          className="bg-custom-white w-full h-10 rounded px-2 font-roboto-mediumItalic"
          secureTextEntry={secureTextEntry}
        />
        {isSecure && (
          <FontAwesome
            name={secureTextEntry ? 'eye-slash' : 'eye'}
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
