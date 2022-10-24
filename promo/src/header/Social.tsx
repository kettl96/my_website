import s from './Header.module.css'
import githubImg from '../assets/github.png'
import linkedImg from '../assets/linkedin.png'
import mailImg from '../assets/mail.png'

const Social: React.FC<{ header: boolean }> = ({ header }) => {
  return (
    <div className={header? s.socialLinks : s.socialLinks__footer}>
      <a href="https://www.linkedin.com/in/alexander-nechaenkov-9b4b34229/" target='_blank' rel="noreferrer"><img src={linkedImg} alt="" /></a>
      <a href="https://github.com/kettl96" target='_blank' rel="noreferrer"><img src={githubImg} alt="" /></a>
      <a href="mailto:kettl110e4@gmail.com" target='_blank' rel="noreferrer"><img src={mailImg} alt="" /></a>
    </div>
  )
}
export default Social