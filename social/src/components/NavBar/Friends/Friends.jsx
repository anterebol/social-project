import stylesFriend from './Friends.module.css';

const Friends = (props) => {
  
  return (
    <div className={stylesFriend.friend}>
      <div className={stylesFriend.ava}></div>
      {props.friend}
    </div>
  )
}

export default Friends;