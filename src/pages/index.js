import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
    <Header className="bg-light"/>
      <Hero className="bg-dark text-light" />
      <Projects className="bg-light" />
       <About    className="bg-dark text-light" />
      <Contact  className="bg-light" />
    </>
  );
}
