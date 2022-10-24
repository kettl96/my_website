import s from './Technology.module.css'
import react from '../../assets/technology/react.png'
import redux from '../../assets/technology/redux.png'
import ts from '../../assets/technology/typescript.png'
import js from '../../assets/technology/js.png'
import git from '../../assets/technology/git.png'
import html from '../../assets/technology/html.png'
import css from '../../assets/technology/css.png'
import webpack from '../../assets/technology/webpack.png'
import node from '../../assets/technology/NodeJs.png'
import ant from '../../assets/technology/ant.png'
import sass from '../../assets/technology/sass.png'
import axios from '../../assets/technology/axios.png'
import rest from '../../assets/technology/rest.png'
import eslint from '../../assets/technology/eslint.png'
import material from '../../assets/technology/material.png'


const Technology = () => {
  return (
    <div className={s.techImg}>
      <img src={react} alt="" className={s.techBlock} />
      <img src={redux} alt="" className={s.techBlock} />
      <img src={js} alt="" className={s.techBlock} />
      <img src={ts} alt="" className={s.techBlock} />
      <img src={html} alt="" className={s.techBlock} />
      <img src={css} alt="" className={s.techBlock} />
      <img src={webpack} alt="" className={s.techBlock} />
      <img src={git} alt="" className={s.techBlock} />
      <img src={sass} alt="" className={s.techBlock} />
      <img src={ant} alt="" className={s.techBlock} />
      <img src={node} alt="" className={s.techBlock} />
      <img src={axios} alt="" className={s.techBlock} />
      <img src={rest} alt="" className={s.techBlock} />
      <img src={eslint} alt="" className={s.techBlock} />
      <img src={material} alt="" className={s.techBlock} />
    </div>
  )
}

export default Technology