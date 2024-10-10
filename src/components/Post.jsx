import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { PostList } from "../store/post-list-store";
 const Post = ({post}) => {
  const {deletePost}=useContext(PostList);
    return (<div className="card post-card" style={{width: "18rem"}}>
        
        <div className="card-body">
          
 <div className="alert alert-success" role="alert">
  BUS NUMBER : {post.reaction}
</div>
          <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"  onClick={ () =>deletePost(post.id)}>
          <TiDeleteOutline />
    <span className="visually-hidden">unread messages</span>
  </span>
          </h5>
          <p className="card-text">{post.body}</p>

         
        </div>
      </div>);
}; export default Post ;