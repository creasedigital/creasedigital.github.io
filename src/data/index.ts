// import CREASE from "assets/imgs/crease.jpg"
import MAINSTACK from "assets/imgs/1_mainstack.jpg"
import FIXAM from "assets/imgs/2_fixam.jpg"
import UNBOXD from "assets/imgs/3_unboxd.jpg"
import GACA from "assets/imgs/4_gaca.jpg"
import ADROSOL from "assets/imgs/s1_adrosol.jpg"
import MUZZYK from "assets/imgs/s2_muzzyk.jpg"
import CLOUDBANK from "assets/imgs/s3_cloudbank.jpg"
import GITHUBUSER from "assets/imgs/s4_github.jpg"
import { TiHome, TiThLarge, TiUser, TiMessage } from "react-icons/ti";


interface ISideProjects{
    id: number;
    img: string;
    title: string;
    desc: string;
    stack: string[];
    link: string;
}


interface ILiveProjects{
    id: number;
    img: string;
    title: string;
    desc: string;
    role: string;
    stack: string[];
    link: string;

}


// side projects
const sideProjects: ISideProjects[] = [
    {
        id: 1,
        img: ADROSOL,
        title: "adrosol",
        desc: "This project was created using the free json placeholder api and displaying a list of users that can be filtered with search strings for name or username",
        stack: ['react', 'axios', 'chakra-ui' ],
        link: "https://adrosol.netlify.app",
    },
    {
        id: 2,
        img: MUZZYK,
        title: "muzzyk",
        desc: "This project showcases a modern music app with several features and core react principles applied.",
        stack: ['react', 'geolocationApi', 'shazamApi', 'redux-toolkit', 'tailwind css' ],
        link: "https://muzzyk.netlify.app",
    },
    {
        id: 3,
        img: CLOUDBANK,
        title: "cloud bank",
        desc: "Achieving a pixel-perfect design is often the minimum requirement expected of a frontend developer. In this project, I reproduced a pixel-perfect version of the cloud bank 'loan page' design.",
        stack: ['react', 'react-router-dom', 'tailwind-css' ],
        link: "https://cloudbankclone.netlify.app",
    },
    {
        id: 4,
        img: GITHUBUSER,
        title: "github profile finder",
        desc: "This app was created to search github user profile information and display a few details",
        stack: ['react', 'react-router-dom', 'react-bootstrap', 'github-api' ],
        link: "https://githubuserprofilefinder.netlify.app",
    },
]

// live projects
const liveProjects: ILiveProjects[] = [ 
    {
        id: 41,
        img: MAINSTACK,
        title: "mainstack",
        desc: "Having ran a promising beta version of this startup social media app that has amassed over six thousand us across 32+ countries globally, Mainstack decided to upgrade her product with several new features and entirely rewrote her codebase to include a bunch of features which will help developers, creatives and a wide range of entrepreneurs monetize their platforms.",
        role: "I worked on important features and pages across the app which includes: Dashboard, Digital Shop, Masterclass, Tribe, Pricing, Help Center, Report A Bug , Suggest A feature, Integrating API, amongst other tasks.",
        stack: ['next-js', 'react', 'typescript', 'framer-motion', 'redux', 'react-router-dom', 'axios', 'chakra-ui' ],
        link: "https://mainstack.co",
    },
    {
        id: 42,
        img: FIXAM,
        title: "fixam backoffice",
        desc: "How many times have you had a need of getting a technician near you but struggled? Fixam Backoffice was designed to solve this challenge and I was privileged to build the web app version of this product from the scratch that will prospectively create thousands of opportunity for technicians and serve millions of users as it grows. I am eagerly waiting for the launch of this product by the first quarter of the comming year.",
        role: "I built this app from the start with a few collaboration towards its closing stages of development.",
        stack: ['react', 'framer-motion', 'typescript', 'redux', 'chakra-ui' ],
        link: "#",
    },
    {
        id: 43,
        img: UNBOXD,
        title: "unboxd",
        desc: "Have you ever wished you could acquire something you desired but never could? Yes! You probably couldn't because you didn't know how to source for funds. Welcome to Unboxd!! This solution will help you cut cost on wasteful spending through creating  a wishlist, and your wishes come true.",
        role: "I managed and maintained the codebase and made changes to the app based on customers' needs and organization's requirements.",
        stack: ['react', 'typescript', 'react-router-dom', 'styled-components', 'redux' ],
        link: "https://unboxd.gifts",
    },
    {
        id: 44,
        img: GACA,
        title: "greenpeg academy",
        desc: "GACA platform offers professional training services to young engineers to bridge skill gaps with courses tailored to suit learning objectives based on learner's needs.",
        role: "During my earlier days as a web developer, I was a part of the team that worked on this technical training platform. I worked on styling and reponsive implementations. ",
        stack: ['react', 'css' ],
        link: "https://greenpegacademy.com",
    },
]


// links

const links: {title:string, icon:any, to:string}[] = [
    {
        title: "home",
        to: "/",
        icon: TiHome
    },
    {
        title: "projects",
        to: "/projects",
        icon: TiThLarge
    },   {
        title: "about",
        to: "/about",
        icon: TiUser
    },   {
        title: "contact",
        to: "/contact",
        icon: TiMessage
    },
]

const loveStatements: {love: string, reason: string}[] = [
    {
        love: "I'm in 💙 with knowledge",
        reason: "I want to know more",
    },
    {
        love: "I 💙 executing what I already know",
        reason: "This way I practice to perfection",
    },
    {
        love: "I 💙 beautiful designs",
        reason: "It inspires me to build more products",
    },{
        love: "I 💙 challenging projects",
        reason: "It is stressful but it helps me get better",
    },{
        love: "I 💙 collaboration and team work",
        reason: "It gives me an opportunity to express my ideas, add values and learn",
    },{
        love: "I 💙 expressing positive vibes",
        reason: "This way I maintain a positive energy",
    },{
        love: "I 💙 to give more than 100%",
        reason: "This way I leave an indelible mark",
    },
]

export {sideProjects, liveProjects, links, loveStatements}