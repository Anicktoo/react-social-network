import s from './AddMessageForm.module.css';
import sendIcon from '../../../../img/uiActions/send.svg';
import { Field } from 'redux-form';
import { TextArea } from '../../../common/FormsControls/FormsControls';
import { requiredField } from '../../../../utils/formValidators/validators';

const AddMessageForm = (props) => {
    return (
        <form onKeyUp={(e) => { props.onKeyUp(e, props.handleSubmit) }} onSubmit={props.handleSubmit}>
            <div className={s.writingPanel}>
                <div className={s.inputWrapper}>
                    <Field name="newMessageBody" component={TextArea} maxRows={12} placeholder="Write your message..." validate={[requiredField]} />
                </div>
                <button className={s.sendButtonContainer}>
                    <img src={sendIcon} alt="" />
                </button>
            </div>
        </form>
    );
}

export default AddMessageForm;

