import dev_01 from '../images/dev_01.jpg'
import dev_02 from '../images/dev_02.jpg'
import dev_03 from '../images/dev_03.jpg'
import dev_04 from '../images/dev_04.jpg'
import dev_05 from '../images/dev_05.jpg'
import dev_06 from '../images/dev_06.jpg'
import {BsShieldCheck} from 'react-icons/bs'
import {GiServerRack} from 'react-icons/gi'
import {AiOutlineGlobal,AiOutlineWifi,AiOutlineCloudServer} from 'react-icons/ai'

export const projects = [
    {
        id:1,
        name:'ANTIVIRUS',
        title:'Lokamart Device & Tools Computers.',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        img:dev_01,
        icon:<BsShieldCheck />
    },
    {
        id:2,
        name:'SERVER PROTECTIONS',
        title:'Makko Cyber Server & Database Protection',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        img:dev_02,
        icon:<GiServerRack />
    },
    {
        id:3,
        name:'INTERNET PROTECTION',
        title:'Jakarta Garden City Apartment & Resindence',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        img:dev_03,
        icon:<AiOutlineGlobal />
    },
    {
        id:4,
        name:'SECURE VPN',
        title:'QuickenWorks Company & Partners',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        img:dev_04,
        icon:<AiOutlineWifi />
    },
    {
        id:5,
        name:'SERVER PROTECTIONS',
        title:'Tokopakedi Database Company & Partners',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        img:dev_05,
        icon:<AiOutlineCloudServer />
    },
    {
        id:6,
        name:'ANTIVIRUS',
        title:'Support System for Cyber Center Jakarta',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        img:dev_06,
        icon:<BsShieldCheck />
    },
]