import post  from "./Post.module.css";


const Post = (props) => {
  return (
        <div className = {post.posts}>
          <div className = {`${post.item} ${post.img}`}>
            <img src="https://images.alphacoders.com/440/440562.jpg" alt="img" />
            {props.message}
            <div>
            <span>like</span> {props.like}
            </div>
          </div>
        </div>
  )
}

export default Post;