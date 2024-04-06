import React from 'react';
import s from './Posts.module.css'
import Post from "./Post/Post";
import Preloader from '../../common/Preloader/Preloader';

const Posts = React.memo((props) => {

    console.log('RENDER');
    console.log(props);


    const postItems = () => props.posts?.map(post =>
        <Post key={post.id} {...post} avatarImgSrc={props.photo} />
    )
    const emptyItems = () => Array(2).join(',').split(',').map(el => <Preloader classes={['stdBlock']} styles={{ minHeight: '200px' }} />)
    return (
        <div className={s.posts}>
            {
                props.isFetching ?
                    emptyItems()
                    :
                    postItems().reverse()
            }
        </div>
    );
});

export default Posts;
