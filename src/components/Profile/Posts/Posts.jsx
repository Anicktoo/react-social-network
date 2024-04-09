import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Post from "./Post/Post";
import s from './Posts.module.css';

const Posts = React.memo(({ posts, photo, isFetching }) => {
    const postItems = () => posts?.map(post =>
        <Post key={post.id} {...post} avatarImgSrc={photo} />
    )
    const emptyItems = () => Array(2).join(',').split(',').map(el => <Preloader classes={['stdBlock']} styles={{ minHeight: '200px' }} />)
    return (
        <div className={s.posts}>
            {
                isFetching ?
                    emptyItems()
                    :
                    postItems().reverse()
            }
        </div>
    );
});

export default Posts;
