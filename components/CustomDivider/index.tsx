import { clsx } from 'clsx'
import React from 'react'
import { View } from 'react-native'

interface CustomDividerProps {
  width?: 'half' | 'full'
  className?: string
}

const CustomDivider = ({ width = 'half', className }: CustomDividerProps) => {
  const customWidth = {
    half: 'w-1/5',
    full: 'w-full',
  }

  const clsxClassName = clsx(
    customWidth[width],
    'border-t rounded border-custom-grey border-solid',
    className,
  )

  return <View className={clsxClassName} />
}

export { CustomDivider }
