import * as React from 'react';
import Hero from '@/components/hero/Hero'
import About from '@/app/about/page'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
// import ContactMe from '@/components/ContactMe'


export default function Home() {
  return (
   <>
      <Hero />
      <Projects />
      <Testimonials />
      {/* <ContactMe /> */}
   </>
  );
}
