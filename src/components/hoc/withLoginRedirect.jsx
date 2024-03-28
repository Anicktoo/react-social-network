import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withLoginRedirect = (Component) => {
    const LoginRedirect = (props) => {

        if (!props.isLoggedIn && !props.userId) {
            return <Navigate to='/login' />;
        }

        return <Component {...props} />
    };

    const mapStateToProps = (state, props) => {
        return {
            isLoggedIn: state.auth.isLoggedIn,
            userId: props.router?.params.userId,
        };
    };

    return connect(mapStateToProps)(LoginRedirect);
};

export default withLoginRedirect;
