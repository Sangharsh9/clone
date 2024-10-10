import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
    const nevigate = useNavigate();
    const {addPost}=useContext(PostList);
const userIdElement= useRef();
const postTitleElement=useRef();
const postBodyElement=useRef();
const reactionsElement=useRef();
//const tagsElement=useRef();
const handlesubmit = (event) =>{
event.preventDefault();
const userId=userIdElement.current.value;
const postTitle=postTitleElement.current.value;
const postBody=postBodyElement.current.value;
const reactions=reactionsElement.current.value;
//const tags=tagsElement.current.value.split(" ");
userIdElement.current.value="";
postBodyElement.current.value="";
postTitleElement.current.value="";
reactionsElement.current.value="";
//tagsElement.current.value="";


fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        
        title:postTitle,
        body:postBody,
        reaction:reactions,
        userId:userId,
    
    })
  })
  .then(res => res.json())
  .then(console.log);

addPost(userId,postTitle,postBody,reactions);
nevigate("/");
}
  
    return (<form className="create-post" onSubmit={handlesubmit}>
 <div className="name" style={{ position: 'relative', paddingBottom: '50px' }}>
    <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter user id</label>
        <input type="text" className="form-control" id="userId" placeholder="Your user Id" ref={userIdElement} />
    </div>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Complain title</label>
        <input type="text" className="form-control" id="title" placeholder="Enter complain title" ref={postTitleElement} />
    </div>
    <div className="mb-3">
        <label htmlFor="content" className="form-label">Complain description</label>
        <textarea className="form-control" id="content" placeholder="Enter complain description" ref={postBodyElement} />
    </div>
    <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Bus number</label>
        <input type="text" className="form-control" id="reactions" placeholder="Enter bus number" ref={reactionsElement} />
    </div>
    <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
        <button type="submit" className="btn btn-primary">POST</button>
    </div>
</div>

        
       
      </form>);
}; export default Login;
