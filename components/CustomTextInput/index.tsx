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
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(!!isSecure)
    const localRef = useRef<TextInput>(null)

    useImperativeHandle(ref, () => ({
      focus: () => {
        localRef.current?.focus()
      },
    }))
    return (
      <View className="w-[90%] mb-5 flex-col justify-center align-center">
        <View className="relative w-full">
          <TextInput
            ref={localRef}
            autoCapitalize="none"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 mr-3"
            />
          )}
        </View>
        {isError && (
          <CustomText size={14} color="red" className="mt-1 font-semibold">
            {errorMsg}
          </CustomText>
        )}
      </View>
    )
  },
)

export { CustomTextInput }
