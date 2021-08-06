import { NavLink } from 'react-router-dom';
import styles from './../Dialogs.module.css';



const Messege = (props) => {
  return (
    <div className='nameItem'>{props.messege}</div>
  )
}
export default Messege;