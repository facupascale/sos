import { FontAwesome } from '@expo/vector-icons'
import { clsx } from 'clsx'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { CustomText } from '../CustomText'

import { ColorsType } from '@/types'

interface CustomButtonProps extends TouchableOpacityProps {
  title: string
  variant?: 'solid' | 'outline'
  buttonClassName?: string
  textClassName?: string
  icon?: keyof typeof FontAwesome.glyphMap
  iconColor?: string
  textColor?: ColorsType
}

const CustomButton = ({
  title,
  onPress,
  icon,
  iconColor = 'black',
  variant = 'solid',
  buttonClassName,
  textClassName,
  textColor = 'white',
}: CustomButtonProps) => {
  const buttonStyle = `${variant === 'outline' ? 'border' : 'border-none'} border-custom-white w-4/5 h-14 rounded-lg flex-row justify-center ${variant === 'outline' ? 'bg-transparent' : 'bg-custom-black'}`
  const customButton = clsx(buttonStyle, buttonClassName)
  const customText = clsx('text-center self-center', textClassName)
  return (
    <TouchableOpacity onPress={onPress} className={customButton}>
      {icon !== undefined && (
        <FontAwesome
          name={icon}
          size={24}
          color={iconColor}
          className="self-center mr-2"
        />
      )}
      <CustomText size={15} className={customText} color={textColor}>
        {title}
      </CustomText>
    </TouchableOpacity>
  )
}

export { CustomButton }
