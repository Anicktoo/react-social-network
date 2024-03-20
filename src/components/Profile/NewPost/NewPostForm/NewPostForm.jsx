import s from './NewPostForm.module.css';
import { classNameFunction } from "../../../../tools/classNameCompiler";
import { Field } from 'redux-form';
import TextareaAutosize from 'react-textarea-autosize';

const cName = classNameFunction(s);

const textareaAutosize = (propsInner) => {
    return (
        <TextareaAutosize
            className={cName('text-area')}
            value={propsInner.input.value}
            placeholder={"Write your post..."}
            onChange={propsInner.input.onChange}
            onBlur={propsInner.input.onBlur}
            onFocus={propsInner.input.onFocus}
        />);
};

const NewPostForm = (props) => {
    return (
        <form onKeyUp={(e) => { props.onKeyUp(e, props.handleSubmit) }} onSubmit={props.handleSubmit} className={cName('new-post-wrapper')}>
            <Field name={"newPostText"} component={textareaAutosize} />
            <button className={cName('mainButton')}>Send </button>
        </form>
    );
};

export default NewPostForm;
