import './App.css'
import Header from './components/Header.jsx'
import Projects from './components/projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
