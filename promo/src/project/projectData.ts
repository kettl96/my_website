import rslang from '../assets/projects/rslang.png'
import onlineStore from '../assets/projects/onlinestore.png'
import sneakers from '../assets/projects/sneakers.png'
import gallery from '../assets/projects/gallery.png'
import music from '../assets/projects/music.png'
import movie from '../assets/projects/movie.png'
import shelter from '../assets/projects/shelter.png'

export const cardData = [
  {
    id: 1,
    name: 'RS Lang',
    img: rslang,
    text: `A web app for learning foreign words, including an electronic textbook with a database of words to learn, 
    mini-games for using them, statistics pages for building individual progress.`,
    link: 'https://rslang-vanya1000.netlify.app/',
    technology: 'React, Redux Toolkit, TS, MUI',
    github: 'https://github.com/Vanya1000/rslang'
  },
  {
    id: 2,
    name: 'Online-Store',
    img: onlineStore,
    text: `A training project on creating an online store of any subject, where goods will have the following functionality: 
    filtering, sorting, searching, adding to cart.`,
    link: 'https://kettl96-online-store.netlify.app/',
    technology: 'React, TS',
    github: 'https://github.com/kettl96/rsSchool-Repo'
  },
  {
    id: 3,
    name: 'Sneakers-Shop',
    img: sneakers,
    text: `A training project in which data is downloaded from 
    the server and pages with selected products and a list of orders are implemented.`,
    link: 'https://kettl96-sneakers-shop.netlify.app/',
    technology: 'React, React Router dom v6, Axios',
    github: 'https://github.com/kettl96/react-sneakers-shop'
  }
]

export const otherData = [
  {
    id: 1,
    name: 'Photo Gallery',
    img: gallery,
    text: `Attractive neon gallery just using html, css, js and library Swiper. Just Scroll and Zoom it. `,
    link: 'https://kettl96.github.io/Photo-Gallery/',
  },
  {
    id: 2,
    name: 'Music App',
    img: music,
    text: `This app is created using only JS. Listen and enjoy`,
    link: 'https://rolling-scopes-school.github.io/kettl96-JSFEPRESCHOOL/audio-player/',
  },
  {
    id: 3,
    name: 'Movie App',
    img: movie,
    text: `App using kinopoisk API, so you can find all information about you favorite film and see 
    his rating.`,
    link: 'https://rolling-scopes-school.github.io/kettl96-JSFEPRESCHOOL/movie-app/',
  },
  {
    id: 4,
    name: 'Shelter',
    img: shelter,
    text: `Web-page for shelter, were you can help pets, or you can find there a new friend.`,
    link: 'https://rolling-scopes-school.github.io/kettl96-JSFE2022Q1/shelter/pages/main/index.html',
  },
]