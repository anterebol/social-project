import React from 'react';
import post  from"./MyPosts.module.css";
import PostItem from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'



const MyPosts = (props) => {

  let postElem = props.postsData.map(el => <PostItem message={el.post} like={el.likes} />);

  let newPostElement = React.createRef();

  let newPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  }

  let onPostChange = () => {
    
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action);

  }

  return (
    <div className={post.content}>
        <h1 className={post.title}>
          My post
        </h1>
        <div>
          <div>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
          </div>
          <div>
            <button onClick= {newPost}>add new post</button>
          </div>
        </div>
        <div className = {post.posts}>
          {postElem}
        </div>
      </div>
  )
}

export default MyPosts;