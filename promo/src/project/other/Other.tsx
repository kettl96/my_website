import { otherData } from '../projectData'
import s from './Other.module.css'

type OtherPropsType = {
  opened: boolean
  close: () => void
}

const Other: React.FC<OtherPropsType> = ({ opened, close }) => {
  return (
    <div className={`${s.allProject} ${opened ? s.visible : ''}`}>
      <div className={s.cardsWrapper}>
        {otherData.map(card => {
          return (
            <div className={s.card} key={card.name}>
              <div className={s.img}><img src={card.img} alt="" /></div>
              <div className={s.name}>{card.name}</div>
              <div className={s.text}>{card.text}</div>
              <a className={s.link} href={card.link} target='_blank' rel="noreferrer" >
                Visit
              </a>
            </div>
          )
        })}
      </div>
      <div className={s.viewBtn__wrapper}>
        <button onClick={close}><span>Hide</span><i></i></button>
      </div>
    </div>

  )
}

export default Other