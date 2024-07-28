import { FormFields, InputField } from '@/types'

const initialFormState: { [key in FormFields]: InputField[] } = {
  login: [
    {
      key: 'email',
      value: '',
      placeholder: 'Email',
      isError: false,
      errorMsg: '',
    },
    {
      key: 'password',
      value: '',
      placeholder: 'Password',
      isError: false,
      errorMsg: '',
    },
  ],
  register: [
    {
      key: 'firstName',
      value: '',
      placeholder: 'Nombre/s',
      isError: false,
      errorMsg: '',
    },
    {
      key: 'lastName',
      value: '',
      placeholder: 'Apellido/s',
      isError: false,
      errorMsg: '',
    },
    {
      key: 'birthDate',
      value: '',
      placeholder: 'Fecha de cumpleaños',
      isError: false,
      errorMsg: '',
    },
    {
      key: 'username',
      value: '',
      placeholder: 'Nombre de usuario',
      isError: false,
      errorMsg: '',
    },
    {
      key: 'email',
      value: '',
      placeholder: 'Email',
      isError: false,
      errorMsg: '',
    },
    {
      key: 'confirmEmail',
      value: '',
      placeholder: 'Confirmacion de Email',
      isError: false,
      errorMsg: '',
    },
    {
      key: 'password',
      value: '',
      placeholder: 'Contraseña',
      isError: false,
      errorMsg: '',
    },
    {
      key: 'confirmPassword',
      value: '',
      placeholder: 'Confirmacion de contraseña',
      isError: false,
      errorMsg: '',
    },
  ],
}

export { initialFormState }
