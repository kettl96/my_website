import React from 'react';
import s from './Project.module.css'
import { cardData } from './projectData';
import Card from './card/Card';
import Other from './other/Other';

const Project = () => {
  const [isOther, setOther] = React.useState(false)

  const openOther = () => {
    setOther(true)
  }

  return (
    <div className={s.wrapper} id={'portfolio'}>
      <div className={s.titleWrapper}>
        <div className={s.title}>SOME OF MY LATEST PROJECT</div>
        <div className={s.titleLine}></div>
      </div>
      <div className={s.projectsWrapper}>
        {cardData.map(el => {
          return (
            <Card
              key={el.id}
              num={el.id}
              name={el.name}
              img={el.img}
              text={el.text}
              link={el.link}
              tech={el.technology}
              git={el.github} />
          )
        })}
      </div>
      <div className={s.viewBtn__wrapper}>
        <button onClick={openOther}><span>View other</span><i></i></button>
      </div>
      <Other
        opened={isOther}
        close={() => setOther(false)} />
    </div>
  )
}

export default Project