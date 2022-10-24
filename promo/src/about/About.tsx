import React from 'react';
import s from './About.module.css'
import me1 from '../assets/me/me1.jpg'
import me2 from '../assets/me/me2.jpg'
import me3 from '../assets/me/me3.jpg'
import ab from '../assets/ab.mp4'
import Work from './work/Work';

const About = () => {
  const [count, setCount] = React.useState(0)
  const [distanceLeft, setDistanceLeft] = React.useState(-350)
  const [distanceRight, setDistanceRight] = React.useState(-350)
  React.useEffect(() => {
    const interval = setInterval(() => {
      switch (count) {
        case 0:
          setDistanceLeft(0)
          setCount(count + 1)
          break
        case 1:
          setDistanceRight(-700)
          setCount(count + 1)
          break
        case 2:
          setDistanceRight(-350)
          setCount(count + 1)
          break
        case 3:
          setDistanceLeft(-350)
          setCount(0)
          break
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [count])

  return (
    <div className={s.wrapper} id={'about'}>
      <div className={s.videoBack}>
        <video src={ab} autoPlay loop muted></video>
      </div>
      <div className={s.back}></div>
      <div className={`${s.back} ${s.backMin}`}></div>
      <div className={s.titleWrapper}>
        <div className={s.titleLine1}></div>
        <div className={s.title}>About me</div>
        <div className={s.titleLine2}></div>
      </div>
      <div className={s.aboutWrapper}>
        <div className={s.imgWrapper}>
          <img src={me2} alt="" className={`${s.img2} `} style={{ transform: `translateX(${distanceLeft}px)` }} />
          <img src={me1} alt="" className={`${s.img1}`} />
          <img src={me3} alt="" className={`${s.img3} `} style={{ transform: `translateX(${distanceRight}px)` }} />
        </div>
        <div className={s.infoWrapper}>
          <div className={s.text}>
            Hello! My name is Alexander and I enjoy creating things that live on the internet.
            My interest in web development has started back in 2020 when I received a book 'JS for kids'.
            After that i started to learn HTML & CSS!
          </div>
          <ul>
            <li>prefer a healthy lifestyle</li>
            <li>can find the optimal way to overcome difficult situation in short period</li>
            <li>visited more than 70 cities</li>
            <li>ever positive and never negative</li>
            <li>genjutsu master</li>
          </ul>
        </div>
      </div>
      <Work />
    </div>
  )
}
export default About