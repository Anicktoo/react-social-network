import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {

    const postItems = props.posts.map(post =>
        <Post key={post.id} avatarImgSrc={props.avatarImgSrc} {...post}/>
    );

    return (
        <div className={s.posts}>
            {postItems}
        </div>
    );
};

export default Posts;
