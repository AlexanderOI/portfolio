import { Div, Img, Presentation, Profile } from "../assets/style/HomeStyled"
import { ImgSkills } from "../components/ImgSkills"
import { useLanguageContext } from "../context/LanguageProveder"

export function Home() {
  const { languagePage } = useLanguageContext()

  return (
    <Div>
      <Img>
        <div>
          <Profile src="https://avatars.githubusercontent.com/u/112521170?s=400&u=6b8d0fde5dc60c33f02e4d2772708bdf5a37196c&v=4" alt="Foto de perfil" />
          <span>{languagePage === 'en' ? 'Programming...' : 'Programando...'}</span>
        </div>
        <ImgSkills />
      </Img>

      <Presentation>
        {languagePage === 'en' ?
          <>
            <h1>Welcome to My Portfolio: AlexanderOI</h1>
            < p > My name is Alexander Ortiz, I'm a Junior Developer passionate about computer technology and programming. Currently, I am studying computer engineering at the Universidad del Cono Sur de las Américas, and I am in my 4th semester.</p>

            <p>In my free time, I engage in Front-End development with React, although I'm always willing to learn new technologies related to software development. This website was created with the knowledge I have acquired so far.</p>

            <p>A phrase that represents me is "Never stop learning." I invite you to visit my GitHub where you will find my projects. You can also see a brief explanation of each project in the "Projects" tab. If you want to contact me, you can do so through my email: <a href="mailto:alexanderoi037@gmail.com">alexanderoi037@gmail.com</a> or by filling out the form on the "Contact me" tab.</p>
          </>
          :
          <>
            <h1>Bienvenido a mi Portafolio: AlexanderOI</h1>
            <p>Me llamo Alexander Ortiz, soy un Desarrollador Junior apasionado por la tecnología informática y la programación. Actualmente, estoy estudiando ingeniería en informática en la Universidad del Cono Sur de las Américas, y estoy en el 4to semestre.</p>

            <p>En mi tiempo libre, practico desarrollo Front-End con React, aunque  siempre estoy dispuesto a aprender nuevas tecnologías relacionadas con el desarrollo de software. Esta página web fue creada con los conocimientos que he adquirido hasta ahora.</p>

            <p>Una frase que me representa es "Nunca pares de aprender". Te invito a visitar mi GitHub donde encontrarás mis proyectos. También puedes ver una breve explicación de cada proyecto en la pestaña "Proyectos". Si deseas contactarme, puedes hacerlo a través de mi correo electrónico: <a href="mailto:alexanderoi037@gmail.com">alexanderoi037@gmail.com</a> o completando el formulario en la pestaña "Contactame".</p>
          </>


        }
      </Presentation>

    </Div >
  )
}