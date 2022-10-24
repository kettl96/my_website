import s from './Header.module.css'

import Links from './Links'
import Social from './Social'

const Header = () => {
  return (
    <header className={s.header} id={'top'}>
      <div className={s.logoWrapper}>
        <div className={s.logo}></div>
        <div className={s.logoText}>AN</div>
      </div>
      <Links header={true}/>
      <Social header={true}/>
    </header>
  )
}

export default Header