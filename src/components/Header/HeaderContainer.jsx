import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthUserData, setUserImage } from '../../redux/authReducer'
import axios from 'axios';

export class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data);
                    this.setUserImage(response.data.data.id);
                }
            });
    }

    setUserImage(userId) {
        console.log(userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                console.log(response.data)
                this.props.setUserImage(response.data.photos.small);
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