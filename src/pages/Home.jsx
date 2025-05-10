import React, { useRef } from 'react';
import NavLayout from '../layouts/navigation/NavLayout';
import AboutLayout from '../layouts/home/AboutLayout';
import SchoolLayout from '../layouts/home/SchoolLayout';
import ProgramLayout from '../layouts/home/ProgramLayout';
import ContactLayout from '../layouts/home/ContactLayout';
import HeroLayout from '../layouts/home/HeroLayout';
import CabangLayout from '../layouts/home/CabangLayout';
import ActivitiesLayout from '../layouts/home/ActivitiesLayout';
import { motion, useInView } from 'motion/react';

const Section = ({children}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: '-100px'});

  return(
    <motion.div
      ref={ref}
      initial={{opacity: 0, y:50}}
      animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
      transition={{duration: 1.0, ease: 'easeInOut'}}
    >
      {children}
    </motion.div>
  )
}

const HomePage = () => {
  return (
    <div className='space-y-10'>
      <NavLayout/>
      <HeroLayout/>
      <Section>
        <AboutLayout/>
      </Section>
      <Section>
        <SchoolLayout/>
      </Section>
      <Section>
        <ProgramLayout/>
      </Section>
      <Section>
        <CabangLayout/>
      </Section>
      <Section>
        <ActivitiesLayout/>
      </Section>
      <Section>
        <ContactLayout/>   
      </Section> 
    </div>
  )
}

export default HomePage;
