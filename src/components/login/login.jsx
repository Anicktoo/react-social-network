import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { classNameFunction } from '../../utils/classNameCompiler';
import { requiredField } from '../../utils/formValidators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import formControlStyle from '../common/FormsControls/FormsControls.module.css';
import s from './Login.module.css';
const cName = classNameFunction(s);


const LoginForm = ({ handleSubmit, captcha, error }) => {
    return (
        <form className={cName('form')} onSubmit={handleSubmit} >
            <div><Field placeholder={"Email"} type={"email"} component={Input} name={"email"} validate={[requiredField]} /></div>
            <div><Field placeholder={"Password"} type={"password"} component={Input} name={"password"} validate={[requiredField]} /></div>
            <div>
                <Field id={'rememberMe'} type={"checkbox"} component={Input} name={"rememberMe"} labelext={"Remember me"} />
            </div>
            {captcha &&
                <div className={cName('captchaBlock')}>
                    <img src={captcha} alt="" />
                    <Field type={"text"} component={Input} name={"captcha"} placeholder={"Please enter the captcha"} validate={[requiredField]} />
                </div>}
            {error &&
                <div className={cName('error-main') + ' ' + formControlStyle['sum-error-container']}>
                    {error}
                </div>
            }
            <div> <button className='mainButton'>Login</button></div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = ({ isLoggedIn, onSubmit, captcha, state }) => {

    if (isLoggedIn) {
        return (
            <Navigate to={'/profile'} />
        );
    }

    return (
        <main className={cName(['login'])}>
            <div className={cName(['loginContainer', 'stdBlock'])}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} captcha={captcha} state={state} />
            </div>
        </main>
    );
}

export default Login;
