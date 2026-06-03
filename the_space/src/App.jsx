import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import PlanetGrid from './components/PlanetGrid'
import PlanetTable from './components/PlanetTable'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <VideoSection />

      <section id="planets">
        <PlanetGrid />
        <PlanetTable />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  )
}

export default App