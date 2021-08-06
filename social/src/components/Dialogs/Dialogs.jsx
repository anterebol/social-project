import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import Name from './Name/Name';
import Messege from './Dialog/Dialog';
import {updateNewMessegeTextCreator, addNewMessegeCreator} from '../../redux/dialogs-reducer'


const Dialogs = (props) => {

  
  let dialogItem = props.DialogData.map((el) => {
    return <Name name={el.name} id={el.id} />
  });
  let messegeArea = React.createRef();
  let addMessege = () => {
    let action = addNewMessegeCreator();
    props.dispatch(action);
  }
  let changeMessege = (e) => {
    let text = e.target.value;
    let action = updateNewMessegeTextCreator(text);
    props.dispatch(action);
  } 
  
  let messege = props.messegesData.map(el => <Messege messege={el.messege} />)
  return (
    <div className={styles.dialogs}>
        <div className={styles.dialogs_item}>
          {dialogItem}
        </div>
        <div className={styles.messeges}>
          {messege}
          <textarea value={props.newTextMessege} 
                    onChange={changeMessege} 
                    placeholder='write your message'>
          </textarea>
          <button onClick={addMessege}>Send messege</button>
        </div>
    </div>
  )
}
export default Dialogs;
