import s from './AddMessageForm.module.css';
import sendIcon from '../../../../img/uiActions/send.svg';
import TextareaAutosize from "react-textarea-autosize";
import { Field } from 'redux-form';

const textareaAutosize = (propsInner) => {
    return <TextareaAutosize
        value={propsInner.input.value}
        className={s.textInput}
        maxRows={12}
        placeholder="Write your message..."
        onChange={propsInner.input.onChange}
        onBlur={propsInner.input.onBlur}
        onFocus={propsInner.input.onFocus}
    />
}

const AddMessageForm = (props) => {
    return (
        <form onKeyUp={(e) => { props.onKeyUp(e, props.handleSubmit) }} onSubmit={props.handleSubmit}>
            <div className={s.writingPanel}>
                <div className={s.inputWrapper}>
                    <Field name="newMessageBody" component={textareaAutosize} />
                </div>
                <button className={s.sendButtonContainer}>
                    <img src={sendIcon} alt="" />
                </button>
            </div>
        </form>
    );
}

export default AddMessageForm;

