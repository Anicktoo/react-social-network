import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getAuthData } from '../../redux/authReducer'

export class HeaderContainer extends Component {

    componentDidMount() {
        this.props.getAuthData();
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
    getAuthData,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)