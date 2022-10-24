import s from './Header.module.css'

const Links: React.FC<{ header: boolean }> = ({ header }) => {
  return (
    <div className={header ? s.links : s.links__footer}>
      <a href="#about" className={s.link}>About</a>
      <a href="#portfolio" className={s.link}>Portfolio</a>
      <a href="/resume.pdf" target='_blank' rel='noopener noreferrer' className={s.link}>Resume</a>
    </div>
  )
}
export default Links