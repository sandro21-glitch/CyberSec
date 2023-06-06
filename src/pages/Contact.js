import React, {useEffect} from 'react'
import ContactHero from '../components/contact/ContactHero'
import Help from '../components/projects/Help'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ContactHero />
      <Help />
    </>
  )
}

export default Contact
