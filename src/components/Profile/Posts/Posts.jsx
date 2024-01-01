import React from 'react';
import s from './Posts.module.css'
import PostContainer from "./Post/PostContainer";

const Posts = (props) => {

    const postItems = props.posts?.map(post =>
        <PostContainer key={post.id} id={post.id} avatarImgSrc={props.avatarImgSrc}/>
    )

    return (
        <div className={s.posts}>
            {postItems.reverse()}
        </div>
    );
};

export default Posts;
