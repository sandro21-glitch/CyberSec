import React, {useEffect} from 'react'
import ServicesHero from '../components/services/ServicesHero'
import Service from '../components/home/Service'
import Protections from '../components/home/Protections'
import Monitoring from '../components/home/Monitoring'
import Support from '../components/home/Support'
import Testimonial from '../components/home/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ServicesHero />
      <Service />
      <Protections />
      <Monitoring />
      <Support />
      <Testimonial />
    </>
  )
}

export default Services
