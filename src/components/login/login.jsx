import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { classNameFunction } from '../../tools/classNameCompiler';

const cName = classNameFunction(s);

const LoginForm = (props) => {
    return (
        <form className={cName('form')} onSubmit={props.handleSubmit} >
            <div><Field placeholder={"Email"} type={"email"} component={"input"} name={"email"} /></div>
            <div><Field placeholder={"Password"} type={"password"} component={"input"} name={"password"} /></div>
            <div>
                <Field id={'rememberMe'} type={"checkbox"} component={"input"} name={"rememberMe"} />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            {props.captcha &&
                <div className={cName('captchaBlock')}>
                    <img src={props.captcha} alt="" />
                    <Field type={"text"} component={"input"} name={"captcha"} placeholder={"Please enter the captcha"} />
                </div>}
            <div> <button className='mainButton'>Login</button></div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const Login = (props) => {
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
