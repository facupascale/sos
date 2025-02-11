import { InputField } from '@/types'

const getInputErrorStatus = (inputs: InputField[], key: string): boolean => {
  const input = inputs.find((input) => input.key === key)
  return input ? input.isError : false
}

const getInputErrorMessage = (inputs: InputField[], key: string): string => {
  const input = inputs.find((input) => input.key === key)
  return input ? input.errorMsg : ''
}

const getInputValue = (inputs: InputField[], key: string): string => {
  const input = inputs.find((input) => input.key === key)
  return input ? input.value : ''
}

const setInputError = (
  inputs: InputField[],
  key: string,
  isError: boolean,
  errorMsg: string = '',
): InputField[] => {
  return inputs.map((input) =>
    input.key === key ? { ...input, isError, errorMsg } : input,
  )
}

const setInputValue = (
  inputs: InputField[],
  key: string,
  value: string,
): InputField[] => {
  return inputs.map((input) =>
    input.key === key ? { ...input, value } : input,
  )
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return passwordRegex.test(password)
}

export const InputUtils = {
  validateEmail,
  validatePassword,
  getInputErrorStatus,
  getInputErrorMessage,
  getInputValue,
  setInputError,
  setInputValue,
}
