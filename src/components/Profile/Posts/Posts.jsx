import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {

    let postsLen = props.posts.length;
    const postItems = new Array(postsLen);
    props.posts.forEach((post, ind) =>
        postItems[postsLen - ind - 1] = <Post key={post.id} avatarImgSrc={props.avatarImgSrc} {...post}/>
    );

    return (
        <div className={s.posts}>
            {postItems}
        </div>
    );
};

export default Posts;
