import style from './AppHeader.module.css'
import ToggleButton from '../ToggleButton'
import Navigator from '../Navigator/Navigator'
import features from '../../helpers/features'
import { useDispatch, useSelector } from 'react-redux'
import { selectFeature } from '../../redux/actionsCreators'

const AppHeader = () => {
  const selected = useSelector(({ ui }) => ui.feature)
  const dispatch = useDispatch()

  const handleSelect = feature => {
    dispatch(selectFeature(feature))
  }

  return (
    <header className={style.header}>
      <div className={style.logo} />
      <Navigator items={features} selected={selected} onSelect={handleSelect} />
      <ul className={style.layersMenu}>
        <li>
          <ToggleButton>Texto</ToggleButton>
        </li>
        <li>
          <ToggleButton>Background</ToggleButton>
        </li>
        <li>
          <ToggleButton>Black</ToggleButton>
        </li>
      </ul>
    </header>
  )
}
export default AppHeader
