import { useState } from 'react'

import { initialFormState } from '@/constants'
import { FormFields, InputField } from '@/types'
import { InputUtils } from '@/utils'

export const useFormInputs = (formType: FormFields) => {
  const [inputs, setInputs] = useState<InputField[]>(initialFormState[formType])

  const setError = (key: string, isError: boolean, errorMsg: string = '') => {
    setInputs((prev) => InputUtils.setInputError(prev, key, isError, errorMsg))
  }

  const setValue = (key: string, value: string) => {
    setInputs((prev) => InputUtils.setInputValue(prev, key, value))
  }

  return {
    inputs,
    setError,
    setValue,
  }
}
