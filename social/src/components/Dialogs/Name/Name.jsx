import { NavLink } from 'react-router-dom'
import styles from '../Dialogs.module.css'
const Name = (props) => {
  return (
    <div className={styles.name}>
      <div className={styles.ava}></div>
      <NavLink to=''>{props.name}</NavLink>
    </div>
  )
}
export default Name;