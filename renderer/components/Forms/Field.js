import style from './forms.module.css'

const Field = ({ children, ...params }) => {
  return (
    <div className={style.field}>
      <input type='text' {...params} placeholder={children} />
    </div>
  )
}
export default Field
