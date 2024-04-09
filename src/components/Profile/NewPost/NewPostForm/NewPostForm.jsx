import { Field } from 'redux-form';
import { classNameFunction } from "../../../../utils/classNameCompiler";
import { TextArea } from '../../../common/FormsControls/FormsControls';
import { requiredField } from './../../../../utils/formValidators/validators';
import s from './NewPostForm.module.css';

const cName = classNameFunction(s);

const NewPostForm = ({ onKeyUp, handleSubmit, isFetching }) => {
    return (
        <form onKeyUp={(e) => { onKeyUp(e, handleSubmit) }} onSubmit={handleSubmit} className={cName('new-post-wrapper')}>
            <Field name={"newPostText"} component={TextArea} validate={[requiredField]} placeholder="Write your post..." />
            <button disabled={isFetching} className={cName('mainButton')}>Send </button>
        </form>
    );
};

export default NewPostForm;
