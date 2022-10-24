import s from './Main.module.css'
import mainImg from '../assets/photo.png'
import codeImg from '../assets/code2.png'
import codeImg2 from '../assets/code3.png'
import codeImgBack from '../assets/backcode1.png'
import codeImgBack2 from '../assets/backcode2.png'
import Technology from './technology stack/Technology'
import Intro from './intro/Intro'


const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.imgWrapper}>
        <img src={mainImg} alt="" className={s.mainImg} />
        <img src={codeImg} alt="" className={s.codeImg} />
        <img src={codeImg2} alt="" className={s.codeImg2} />
        <Technology />
      </div>
      <Intro />
      <div className={s.backImgWrapper}>
        <img src={codeImgBack} alt="" className={s.codeImgBack} />
        <img src={codeImgBack2} alt="" className={s.codeImgBack2} />
      </div>
    </div>
  )
}

export default Main



