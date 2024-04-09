import TextareaAutosize from 'react-textarea-autosize';
import { classNameFunction } from '../../../utils/classNameCompiler';
import s from './FormsControls.module.css';

const cname = classNameFunction(s);

const withFormControls = (Component) => ({ input, meta, hasError, ...props }) => {
    return (
        <div className={cname(['form-control', hasError ? 'error' : ''])}>
            <Component
                {...input}
                {...props}
            />
            {props.labelext && <label htmlFor={props.id}>{props.labelext}</label>}
            {hasError && <span className={cname('error-message')}>{meta.error}</span>}
        </div>
    );
}

const InnerTextArea = withFormControls(TextareaAutosize);

export const TextArea = ({ maxRows, meta, ...props }) => {
    return <InnerTextArea {...props}
        className={cname('text-area')}
        maxRows={maxRows}
        hasError={meta.submitFailed} />
};

const InnerInput = withFormControls("input");

export const Input = ({ meta, ...props }) => {
    return <InnerInput {...props}
        hasError={meta.touched && meta.error} />
};