import React from 'react';
import MainButton from './MainButton';

const NewPostInput = () => {
    return (
        <form className="new-post-input" id="newPost">
            <div className='new-post-input__text-area' aria-label='your text...' form='newPost'
                contenteditable="true" role="textbox" aria-multiline="true">
                <div>
                    <br />
                </div>
            </div>
            <MainButton />
        </form>
    );
}

export default NewPostInput;
