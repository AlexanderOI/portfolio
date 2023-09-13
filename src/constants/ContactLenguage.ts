type LanguageMessages = {
  [key: string]: {
    successMessage: string
    errorMessage: string
  }
}

export const languageMessages: LanguageMessages = {
  en: {
    successMessage: `Sent Email: Check your inbox, including your spam folder, for an automated message. If you don't receive it, please double check if you entered your email address "{email}" correctly. If you have received it, I will respond as much as I can! 😃`,
    errorMessage: 'Error sending email, try again',
  },
  es: {
    successMessage: `Correo electrónico enviado: revise su bandeja de entrada, incluida su carpeta de correo no deseado, para ver si hay un mensaje automático. Si no lo recibe, vuelva a verificar si ingresó su dirección de correo electrónico "{email}" correctamente. Si lo has recibido, responderé en cuanto pueda! 😃`,
    errorMessage: 'Error al enviar el correo, inténtelo de nuevo',
  },
}

type formItIsValidType = {
  [key: string]: {
    email: string
    empty: string
  }
}

export const formItIsValid: formItIsValidType = {
  'es': {
    email: 'La dirección de correo electrónico es inválida',
    empty: 'Hay campos vacíos'
  },
  'en': {
    email: 'The email address is invalid',
    empty: 'There are empty fields'
  }
}
