import Field from '../../Forms/Field'
import library from '../../../styles/library.module.css'

const BibleFeature = () => {
  return (
    <>
      <header className={library.dualHeader}>
        <Field autoFocus>Buscar en la biblia</Field>
        <select>
          <option value=''>Version: RVR60</option>
        </select>
      </header>
    </>
  )
}
export default BibleFeature
