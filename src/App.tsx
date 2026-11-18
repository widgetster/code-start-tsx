import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { Header } from './components/Header'
import { Home } from './Home'
import { About } from './About'
import { Courses } from './Courses'
import { Blog } from './Blog'
import { Contact } from './Contact'
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
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />  
          <Route path="/contact" element={<Contact />} />        
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
