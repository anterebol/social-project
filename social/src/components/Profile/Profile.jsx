import post  from"./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {

  
  return (
    <div className={post.content}>
        <ProfileInfo DialogData={props.DialogData} messegesData={props.messegesData}/>
        <MyPosts postsData={props.postsData} dispatch={props.dispatch} newPostText = {props.newPostText} />
      </div>
  )
}

export default Profile;