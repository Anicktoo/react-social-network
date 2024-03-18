import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    console.log(props.captcha)
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} type={"email"} component={"input"} name={"email"} /></div>
            <div><Field placeholder={"Password"} type={"password"} component={"input"} name={"password"} /></div>
            <div><Field type={"checkbox"} component={"input"} name={"rememberMe"} />Remember me</div>
            {props.captcha &&
                <div>
                    <img src={props.captcha} alt="" />
                    <label htmlFor="captcha">Please enter the captcha<br /></label>
                    <Field type={"text"} component={"input"} id='captcha' name={"captcha"} />
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
        <main className='login'>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={props.onSubmit} captcha={props.captcha} />
        </main>
    );
}

export default Login;
