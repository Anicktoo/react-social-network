import Login from './Login';
import { connect } from 'react-redux';
import { login } from './../../redux/authReducer';
import { compose } from 'redux';
import { Component } from 'react';

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
        isLoggedIn: state.auth.isLoggedIn,
        captcha: state.auth.captcha,
    }
}

export default compose(
    connect(mapStateToProps, {
        login
    })
)(LoginContainer)