import Post from "./Post"
import { useContext, useEffect } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import { useState } from "react";
import Loadingspinner from "./Loadingspinner";
const Postlist = () => {
    const {postList,addIntialPost}=useContext(PostListData);
    const [dataFetch,setdataFetch]=useState(false);
    const [fetching,setfetchinf]=useState(false);
/*
    useEffect(() => {
      
        setfetchinf(true);
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
       addIntialPost(data.posts);
       setdataFetch(true);
       setfetchinf(false);-
        });
    },[]);
    */
   
   
    return( <>
    {fetching && <Loadingspinner></Loadingspinner>}
              {
                !fetching && postList.length===0 && <Welcome ></Welcome>
              }   
   { !fetching &&  postList.map((post) => (<Post key={post.id} post={post}></Post>))}
    
    </>);
}; export default Postlist;