import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Footer } from './components/Footer'


function App() {

  return (
    <>
      <Header />

      <main>
        <Hero />

        <Benefits />

        <Footer />
      </main>
    </>
  )
}

export default App
