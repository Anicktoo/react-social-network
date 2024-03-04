import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {

    const postItems = props.posts?.map(post =>
        <Post key={post.id} {...post} avatarImgSrc={props.photos.small}/>
    )

    return (
        <div className={s.posts}>
            {postItems.reverse()}
        </div>
    );
};

export default Posts;
