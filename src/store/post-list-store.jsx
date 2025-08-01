import { children, createContext, useState } from "react";
import { useReducer } from "react";
 export const PostList=createContext({
postList :[],
addPost: () => {},
addIntialPost: () => {},
deletePost: () => {},
});

const postListReducer = (currPostList ,action ) => {
    let newPostList=currPostList;
    if(action.type ==="DELETE_POST"){
newPostList=currPostList.filter(post => post.id !== action.payload.postId);
    } 
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList];
    }
    else if(action.type==="ADD_INTIAL_POST"){
        newPostList=action.payload.posts;
    }
    return newPostList;
}

const  PostListProvider = ({children}) =>{

    const [postList,dispatchPostList]=useReducer(postListReducer,[]);


    const addPost = (userId,postTitle,postBody,reactions) => {
   dispatchPostList({
    type:"ADD_POST",
    payload: {
        id:Date.now(),
        title:postTitle,
        body:postBody,
        reaction:reactions,
        userId:userId,
        
    }
   })
    };
    const addIntialPost = (posts) => {
        dispatchPostList({
         type:"ADD_INTIAL_POST",
         payload: {
         posts
         }
        })
         };

    const deletePost = (postId) => {
        dispatchPostList({
            type:"DELETE_POST",
            payload: {
                postId,
            },
        });
    };

    return (<PostList.Provider value ={ {postList ,addPost ,deletePost,addIntialPost} }>{children}


    </PostList.Provider>);
}; export default PostListProvider;
