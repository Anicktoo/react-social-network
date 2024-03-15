import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withLoginRedirect = (Component) => {

    const LoginRedirect = (props) => {
        if (!props.isLoggedIn) {
            return <Navigate to={"/login"} />
        }

        return <Component {...props} />
    };

    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.auth.isLoggedIn,
        };
    };

    return connect(mapStateToProps)(LoginRedirect);
};

export default withLoginRedirect;
