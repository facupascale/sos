import clsx from 'clsx'
import { Text, TextProps } from 'react-native'

import { FontSize } from '@/constants'
import { ColorsType } from '@/types'

interface CustomTextProps extends TextProps {
  size: keyof typeof FontSize
  children: React.ReactNode
  italic?: 'italic' | 'normal'
  color?: ColorsType
  className?: string
}

const CustomText = ({
  size,
  italic = 'normal',
  color = 'violet',
  children,
  className,
  ...props
}: CustomTextProps) => {
  const colorPicked = {
    primary: 'text-custom-primary',
    pDarker: 'text-custom-pDarker',
    black: 'text-custom-black',
    grey: 'text-custom-grey',
    white: 'text-custom-white',
    green: 'text-custom-green',
    red: 'text-custom-red',
    yellow: 'text-custom-yellow',
    violet: 'text-custom-violet',
  }

  const fontStyle = {
    italic: 'font-roboto-mediumItalic',
    normal: 'font-roboto-medium',
  }
  const customClassName = clsx(colorPicked[color], fontStyle[italic], className)
  return (
    <Text
      style={{
        fontSize: FontSize[size],
      }}
      className={customClassName}
      {...props}
    >
      {children}
    </Text>
  )
}

export { CustomText }
