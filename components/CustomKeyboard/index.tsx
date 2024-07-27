import { clsx } from 'clsx'
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
} from 'react-native'
interface CustomKeyboardAvoidingProps extends KeyboardAvoidingViewProps {
  children: React.ReactNode
  className?: string
}

const CustomKeyboardAvoiding = ({
  children,
  className,
}: CustomKeyboardAvoidingProps) => {
  const customClassName = clsx(className)
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
      className={customClassName}
    >
      {children}
    </KeyboardAvoidingView>
  )
}

export { CustomKeyboardAvoiding }
