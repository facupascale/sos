import { InputField } from '../hooks/useFormInputs'

export const getInputErrorStatus = (
  inputs: InputField[],
  key: string,
): boolean => {
  const input = inputs.find((input) => input.key === key)
  return input ? input.isError : false
}

export const getInputErrorMessage = (
  inputs: InputField[],
  key: string,
): string => {
  const input = inputs.find((input) => input.key === key)
  return input ? input.errorMessage : ''
}

export const getInputValue = (inputs: InputField[], key: string): string => {
  const input = inputs.find((input) => input.key === key)
  return input ? input.value : ''
}

export const setInputError = (
  inputs: InputField[],
  key: string,
  isError: boolean,
  errorMessage: string = '',
): InputField[] => {
  return inputs.map((input) =>
    input.key === key ? { ...input, isError, errorMessage } : input,
  )
}

export const setInputValue = (
  inputs: InputField[],
  key: string,
  value: string,
): InputField[] => {
  return inputs.map((input) =>
    input.key === key ? { ...input, value } : input,
  )
}

// Ejemplo de validación de email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Ejemplo de validación de contraseña
export const validatePassword = (password: string): boolean => {
  // Mínimo 8 caracteres, al menos una letra y un número
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return passwordRegex.test(password)
}
