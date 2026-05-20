import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import Vidyut   from './pages/Vidyut'
import Event    from './pages/Event'
import About    from './pages/About'
import Founders from './pages/Founders'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/vidyut"    element={<Vidyut />} />
          <Route path="/event"     element={<Event />} />
          <Route path="/about"     element={<About />} />
          <Route path="/founders"  element={<Founders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
