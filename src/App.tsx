import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Info from "./components/Info/Info"
import Presentation from "./components/Presentation/Presentation"
import Tech from "./components/Technologies/Tech"
import me from '../icons/perfil.jpeg'

import HTML from '../icons/HTML.svg'
import CSS from '../icons/CSS.svg'
import REACT from '../icons/REACT.svg'
import JS from '../icons/JAVASCRIPT.svg'
import PYTHON from '../icons/PYTHON.svg'

const habilidadesTech = [
  { src: HTML, width: 95 },
  { src: CSS, width: 85 },
  { src: REACT, width: 100 },
  { src: JS, width: 150 },
];

const estudandoTech = [
  { src: PYTHON, width: 120},
]

const projetosPessoais = [
  { title: 'EldenQuiz', link: 'github.com/EldenQuizApp', href: 'https://github.com/MuriloZague/elden-quiz' },
  { title: 'RocketSeat', link: 'github.com/DoList', href: 'https://github.com/MuriloZague/todolist_rocket' },
  { title: 'BOT Python', link: 'github.com/BotPython', href: 'https://github.com/MuriloZague/Bot-simples-para-envio-de-emails' },
]

const contatosPessoais = [
  { title: 'Linkedin', link: 'murilo-zague', href: 'https://www.linkedin.com/in/murilo-zague/' },
  { title: 'Instagram', link: 'murilo-bz', href: 'https://www.instagram.com/murilo_bz/' },
  { title: 'E-mail', link: 'zaguemurilo7@gmail.com', href: 'zaguemurilo7@gmail.com' },
]

function App() {
  return (
    <div className="w-1/3 m-auto">

      <img 
        className="me"
        src={me}
      />

      <Presentation />

      <About />
      
      <Info 
        name={'Meus Projetos'}
        text={projetosPessoais}
      />
      <Tech 
        name={'Minhas Habilidades'}
        icons={habilidadesTech}
      />
      <Tech 
        name={'Estou Estudando'}
        icons={estudandoTech}  
      />
      <Info 
        name={'Contatos'}
        text={contatosPessoais}
      />
      <Experience />
    </div>
  )
}

export default App
