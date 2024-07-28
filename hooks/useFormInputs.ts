import { useState } from 'react'

import { initialFormState } from '@/constants'
import { FormFields, InputField } from '@/types'

export const useFormInputs = (formType: FormFields) => {
  const [inputs, setInputs] = useState<InputField[]>(initialFormState[formType])

  const setError = (
    key: string,
    isError: boolean,
    errorMessage: string = '',
  ) => {
    setInputs((prev) =>
      prev.map((input) =>
        input.key === key ? { ...input, isError, errorMessage } : input,
      ),
    )
  }

  const setValue = (key: string, value: string) => {
    setInputs((prev) =>
      prev.map((input) => (input.key === key ? { ...input, value } : input)),
    )
  }

  return {
    inputs,
    setError,
    setValue,
  }
}
