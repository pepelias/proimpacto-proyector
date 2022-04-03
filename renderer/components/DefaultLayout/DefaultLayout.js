import { useSelector } from 'react-redux'
import AppHeader from '../AppHeader/AppHeader'
import BibleFeature from '../Features/Bible/Bible'
import LyricsFeature from '../Features/lyrics/Lyrics'
import style from './defaultLayout.module.css'

const DefaultLayout = () => {
  const feature = useSelector(({ ui }) => ui.feature)
  const pages = {
    bible: <BibleFeature />,
    lyrics: <LyricsFeature />,
    media: <h1>No Disponible</h1>,
  }
  return (
    <>
      <div className={style.defaultLayout}>
        <AppHeader />
        <main className={style.mainContainer}>
          <aside className={style.favorites}></aside>
          <section className={style.featureContainer}>{pages[feature]}</section>
          <section className={style.controlContainer}></section>
          <aside className={style.backgroundsContainer}></aside>
        </main>
        <footer>Footer</footer>
      </div>
    </>
  )
}
export default DefaultLayout
