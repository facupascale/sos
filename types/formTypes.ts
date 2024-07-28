export type FormFields = 'login' | 'register' | 'verification'
export type InputField = {
  key: string
  value: string
  placeholder: string
  isError: boolean
  errorMsg: string
}
