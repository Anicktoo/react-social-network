import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthUserData, setUserImage } from '../../redux/authReducer'
import { authAPI, profileAPI } from '../../api/api';

export class HeaderContainer extends Component {

    componentDidMount() {
        authAPI.getAuthData().then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data);
                this.setUserImage(data.data.id);
            }
        });
    }

    setUserImage(userId) {
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserImage(data.photos.small);
        });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLoggedIn,
    login: state.auth.login,
    image: state.auth.image,
})

const mapDispatchToProps = {
    setAuthUserData,
    setUserImage,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)