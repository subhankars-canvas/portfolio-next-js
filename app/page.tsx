import Navbar from '@/components/layout/Navbar'
import About from '@/components/sections/about'
import Project from '@/components/sections/project'
import Contact from '@/components/sections/contact'
import HomeContent from '@/components/sections/home'

export default function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <main className="pt-16">
        <HomeContent />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  )
}
