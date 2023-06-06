import React, {useEffect} from 'react'
import ProjectsHero from '../components/projects/ProjectsHero'
import Featured from '../components/projects/Featured'
import Project from '../components/projects/Project';
import Monitoring from '../components/home/Monitoring'
import DataPrivacy from '../components/home/DataPrivacy'
import Help from '../components/projects/Help'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ProjectsHero />
      <Featured />
      <Project />
      <Monitoring />
      <DataPrivacy />
      <Help />
    </>
  )
}

export default Projects
