import s from './NewPostForm.module.css';
import { classNameFunction } from "../../../../utils/classNameCompiler";
import { Field } from 'redux-form';
import { requiredField } from './../../../../utils/formValidators/validators';
import { TextArea } from '../../../common/FormsControls/FormsControls';

const cName = classNameFunction(s);

const NewPostForm = (props) => {
    return (
        <form onKeyUp={(e) => { props.onKeyUp(e, props.handleSubmit) }} onSubmit={props.handleSubmit} className={cName('new-post-wrapper')}>
            <Field name={"newPostText"} component={TextArea} validate={[requiredField]} placeholder="Write your post..." />
            <button className={cName('mainButton')}>Send </button>
        </form>
    );
};

export default NewPostForm;
