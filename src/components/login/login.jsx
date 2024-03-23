import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { classNameFunction } from '../../utils/classNameCompiler';
import { Input } from '../common/FormsControls/FormsControls';
import { requiredField } from '../../utils/formValidators/validators';
import { Navigate } from 'react-router-dom';

const cName = classNameFunction(s);


const LoginForm = (props) => {
    return (
        <form className={cName('form')} onSubmit={props.handleSubmit} >
            <div><Field placeholder={"Email"} type={"email"} component={Input} name={"email"} validate={[requiredField]} /></div>
            <div><Field placeholder={"Password"} type={"password"} component={Input} name={"password"} validate={[requiredField]} /></div>
            <div>
                <Field id={'rememberMe'} type={"checkbox"} component={Input} name={"rememberMe"} labelText={"Remember me"} />
            </div>
            {props.captcha &&
                <div className={cName('captchaBlock')}>
                    <img src={props.captcha} alt="" />
                    <Field type={"text"} component={Input} name={"captcha"} placeholder={"Please enter the captcha"} validate={[requiredField]} />
                </div>}
            <div> <button className='mainButton'>Login</button></div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {

    if (props.isLoggedIn) {
        return (
            <Navigate to={'/profile'} />
        );
    }

    return (
        <main className={cName(['login'])}>
            <div className={cName(['loginContainer', 'stdBlock'])}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={props.onSubmit} captcha={props.captcha} />
            </div>
        </main>
    );
}

export default Login;
