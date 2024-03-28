import TextareaAutosize from 'react-textarea-autosize';
import s from './FormsControls.module.css';
import { classNameFunction } from '../../../utils/classNameCompiler';

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

export const TextArea = (props) => {
    return <InnerTextArea {...props}
        className={cname('text-area')}
        maxRows={props.maxRows}
        hasError={props.meta.submitFailed} />
};

const InnerInput = withFormControls("input");

export const Input = (props) => {
    return <InnerInput {...props}
        hasError={props.meta.touched && props.meta.error} />
};