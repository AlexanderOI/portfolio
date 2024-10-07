export const inputLanguage: InputLanguageType = {
  'es': {
    name: {
      label: 'Nombre',
      placeholder: 'Escribe tu nombre'
    },
    gmail: {
      label: 'Correo',
      placeholder: 'ejemplo03@gmail.com'
    },
    message: {
      label: 'Mensaje',
      placeholder: 'Escribe tu mensaje aquí'
    },
    subject: {
      label: 'Asunto',
      placeholder: 'Asunto del mensaje'
    }
  },
  'en': {
    name: {
      label: 'Name',
      placeholder: 'Write your name'
    },
    gmail: {
      label: 'Gmail',
      placeholder: 'example03@gmail.com'
    },
    message: {
      label: 'Message',
      placeholder: 'Write your message here'
    },
    subject: {
      label: 'Subjet',
      placeholder: 'Message subject'
    }
  }
}

type InputLanguageType = {
  [languageCode: string]: {
    name: {
      label: string;
      placeholder: string;
    }
    gmail: {
      label: string;
      placeholder: string;
    }
    message: {
      label: string;
      placeholder: string;
    }
    subject: {
      label: string;
      placeholder: string;
    }
  };
}