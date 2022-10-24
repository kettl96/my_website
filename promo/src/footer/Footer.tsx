import Links from '../header/Links'
import Social from '../header/Social'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.allLinks}>
        <div>
          <div className={`${s.linkTitle} ${s.links}`}>Links</div>
          <Links header={false} />
        </div>
        <div>
          <div className={s.linkTitle}>Get in touch</div>
          <Social header={false} />
        </div>
      </div>
      <div className={s.title}>Design & Built by Alexander Nechaenkov</div>
      <a href="#top" className={s.top}><div>&#10148;</div></a>
    </footer>
  )
}

export default Footer