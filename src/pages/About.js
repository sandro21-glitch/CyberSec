import React, {useEffect} from 'react'
import AboutHero from '../components/about/AboutHero'
import Cyberspace from '../components/about/Cyberspace'
import Privacy from '../components/home/Privacy'
import Companies from '../components/home/Companies'
import DataPrivacy from '../components/home/DataPrivacy'
import Monitoring from '../components/home/Monitoring'
import Team from '../components/about/Team'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AboutHero />
      <Cyberspace />
      <Privacy />
      <Companies />
      <DataPrivacy />
      <Monitoring />
      <Team />
    </>
  )
}

export default About
