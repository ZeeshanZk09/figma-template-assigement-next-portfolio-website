import * as React from 'react';
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import ContactMe from '@/components/Contact-me'


export default function Home() {
  return (
   <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ContactMe />
   </>
  );
}
