import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { Header } from './components/Header'
import { Hero } from './Hero'
import { Benefits } from './Benefits'
import { About } from './About'
import { Footer } from './components/Footer'


function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            index
            element={
              <>
                <Hero />
                <Benefits />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
