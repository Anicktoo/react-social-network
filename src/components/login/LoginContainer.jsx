import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from './../../redux/authReducer';
import Login from './Login';

class LoginContainer extends Component {
    onSubmit = (formData) => {
        this.props.login(formData.email, formData.password, !!formData.rememberMe, formData.captcha);
    }

    render() {
        return <Login {...this.props} onSubmit={this.onSubmit} />
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
        isLoggedIn: state.auth.isLoggedIn,
        captcha: state.auth.captcha,
    }
}

export default compose(
    connect(mapStateToProps, {
        login
    })
)(LoginContainer)