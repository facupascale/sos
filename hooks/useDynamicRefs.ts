import { useEffect, createRef, useRef } from 'react'

import { InputField } from './useFormInputs'

import { CustomTextInputRef } from '@/components'

type InputFieldKeys = InputField['key']

export const useDynamicRefs = (inputFields: InputField[]) => {
  const refs = useRef<
    Record<InputFieldKeys, React.RefObject<CustomTextInputRef>>
  >({})

  useEffect(() => {
    inputFields.forEach((field) => {
      if (!refs.current[field.key]) {
        refs.current[field.key] = createRef<CustomTextInputRef>()
      }
    })
  }, [inputFields])

  const focusNextField = (currentKey: InputFieldKeys) => {
    const refKeys = Object.keys(refs.current) as InputFieldKeys[]
    const currentIndex = refKeys.indexOf(currentKey)

    // Si el currentKey no se encuentra, currentIndex será -1
    if (currentIndex === -1) {
      console.warn(`No se encontró la clave: ${currentKey}`)
      return
    }

    // Obtener la siguiente clave
    const nextKey = refKeys[currentIndex + 1]

    // Verificar si nextKey existe y si la referencia es válida
    if (nextKey && refs.current[nextKey]?.current) {
      refs.current[nextKey].current?.focus()
    } else {
      console.warn(
        `No se puede enfocar el siguiente campo para la clave: ${nextKey}`,
      )
    }
  }

  return { refs: refs.current, focusNextField }
}
