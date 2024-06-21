import { TextInput, TextInputProps, View } from 'react-native'

import { CustomText } from '../CustomText'

interface CustomTextInputProps extends TextInputProps {
  isError: boolean
  errorMsg: string
}

const CustomTextInput = ({
  isError,
  errorMsg,
  ...props
}: CustomTextInputProps) => {
  return (
    <View>
      <TextInput {...props} />
      {isError && (
        <CustomText size={14} weight="regular">
          {errorMsg}
        </CustomText>
      )}
    </View>
  )
}

export { CustomTextInput }
