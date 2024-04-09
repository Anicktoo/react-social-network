import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from './../../redux/authReducer';
import Header from './Header';

export class HeaderContainer extends Component {

    state = {
        isPopupVisible: false,
    }

    popupRef = React.createRef();

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.popupRef.current && !this.popupRef.current.contains(event.target)) {
            this.setState({ isPopupVisible: false });
        }
    };

    handleButtonClick = () => {
        this.setState({ isPopupVisible: true });
    };


    logout = () => {
        this.props.logout();
        this.setState({ isPopupVisible: false });
    }

    render() {
        return (
            <Header {...this.props} isPopupVisible={this.state.isPopupVisible} logout={this.logout} popupRef={this.popupRef} handleButtonClick={this.handleButtonClick} />
        )
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLoggedIn,
    login: state.auth.login,
    image: state.auth.image,
})

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)