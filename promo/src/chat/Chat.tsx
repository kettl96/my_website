import s from './Chat.module.css'
import coffee from '../assets/coffee.png'
import smoke from '../assets/smoke.png'

const Chat = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <img src={smoke} alt="" className={s.smoke} />
        <img src={coffee} alt="" className={s.coffee}/>
      </div>
      <div className={s.title}>
        <div>Let's have a</div>
        <div className={s.btn}>
          <a href="mailto:kettl110e4@gmail.com" target='_blank' rel="noreferrer">
            <button>chat</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Chat