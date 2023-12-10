import React from 'react';
import c from './Post.module.css';


const Post = () => {
    return (
        <article className={c.post}>
            <div className={c.imageСontainer}>
                {/* img */}
            </div>
            <div className={c.content}>
                <p className={c.text}>Hey, React seems cool!</p>
                <p className={c.text}>I love it!</p>
            </div>
        </article>
    );
}

export default Post;
