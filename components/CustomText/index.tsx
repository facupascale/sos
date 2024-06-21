import { Text } from 'react-native'

import { FontWeights, FontSize } from '@/constants'

interface CustomTextProps {
  size: keyof typeof FontSize
  weight: keyof typeof FontWeights
  children: string
}

const CustomText = ({
  size,
  weight = 'regular',
  children,
}: CustomTextProps) => {
  return (
    <Text style={{ fontSize: FontSize[size], fontFamily: FontWeights[weight] }}>
      {children}
    </Text>
  )
}

export { CustomText }
