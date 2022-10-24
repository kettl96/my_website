import s from './Intro.module.css'

const Intro = () => {
  return (
    <div className={s.intro}>
      <div className={s.hello}>Hi, my name is</div>
      <div className={s.name}>Alexander</div>
      <div className={s.surname}>Nechaenkov.</div>
      <div className={s.description}>
        <span> Frontend developer.</span> Big fan of exploration. <br />
        Never stop on something you’ve already achieved, keep studying. <br />
        Ever positive and never negative. <span> Please enjoy;&#41;</span>
      </div>
    </div>
  )
}

export default Intro