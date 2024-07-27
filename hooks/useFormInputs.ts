import { useState } from 'react'
import { TextInputProps } from 'react-native'

export interface InputField extends TextInputProps {
  key: string
  value: string
  isError: boolean
  errorMessage: string
}

type FormFields = 'login' | 'register'

const initialFormState: { [key in FormFields]: InputField[] } = {
  login: [
    {
      key: 'email',
      value: '',
      placeholder: 'Email',
      isError: false,
      errorMessage: '',
    },
    {
      key: 'password',
      value: '',
      placeholder: 'Password',
      isError: false,
      errorMessage: '',
    },
  ],
  register: [
    { key: 'firstName', value: '', isError: false, errorMessage: '' },
    { key: 'lastName', value: '', isError: false, errorMessage: '' },
    { key: 'birthDate', value: '', isError: false, errorMessage: '' },
    { key: 'username', value: '', isError: false, errorMessage: '' },
    { key: 'email', value: '', isError: false, errorMessage: '' },
    { key: 'confirmEmail', value: '', isError: false, errorMessage: '' },
    {
      key: 'password',
      value: '',
      isError: false,
      errorMessage: '',
    },
    {
      key: 'confirmPassword',
      value: '',
      isError: false,
      errorMessage: '',
    },
  ],
}

export const useFormInputs = () => {
  const [inputs, setInputs] = useState(initialFormState)

  const setError = (
    form: FormFields,
    key: (typeof initialFormState)[FormFields][number]['key'],
    isError: boolean,
    errorMessage: string = '',
  ) => {
    setInputs((prev) => ({
      ...prev,
      [form]: prev[form].map((input) =>
        input.key === key ? { ...input, isError, errorMessage } : input,
      ),
    }))
  }

  const setValue = (form: FormFields, key: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [form]: prev[form].map((input) =>
        input.key === key ? { ...input, value } : input,
      ),
    }))
  }

  return {
    inputs,
    setError,
    setValue,
  }
}
