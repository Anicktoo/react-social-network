import { Field } from 'redux-form';
import sendIcon from '../../../../img/uiActions/send.svg';
import { requiredField } from '../../../../utils/formValidators/validators';
import { TextArea } from '../../../common/FormsControls/FormsControls';
import s from './AddMessageForm.module.css';

const AddMessageForm = ({ onKeyUp, handleSubmit }) => {
    return (
        <form onKeyUp={(e) => { onKeyUp(e, handleSubmit) }} onSubmit={handleSubmit}>
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

