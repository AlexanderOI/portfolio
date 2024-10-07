type Information = {
  age: string,
  birtday: string,
  country: string
}

type aboutMeType = {
  [key: string]: Information
}

export const aboutMe: aboutMeType = {
  'en': {
    age: 'Age: 20',
    birtday: 'Birthday: August 5',
    country: 'Country: Paraguay'
  },
  'es': {
    age: 'Edad: 20',
    birtday: 'Cumpleaños: 5 de agosto',
    country: 'País: Paraguay'
  }
}