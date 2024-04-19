import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { compose } from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Nav from './components/Nav/Nav';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import InitLoader from "./components/common/initLoader/InitLoader";
import withStoreProvider from "./components/hoc/withStoreProvider";
import { initialize } from './redux/appReducer';
import './styles/App.css';

class App extends Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.isInitialized) {
            return (
                <InitLoader />
            );
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <div className='inner-wrapper'>
                        <Nav />
                        <div className='content'>
                            <Routes>
                                <Route path='/' element={<Navigate to='/profile' replace={true} />} />
                                <Route path="/profile/:userId?"
                                    element={
                                        <ProfileContainer />
                                    }
                                />
                                <Route path="/dialogs/*"
                                    element={
                                        <DialogsContainer />
                                    }
                                />
                                <Route path="/users"
                                    element={
                                        <UsersContainer />
                                    }
                                />
                                <Route path="/login"
                                    element={
                                        <LoginContainer />
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter >
        );
    }
}

export default compose(
    withStoreProvider,
    connect(state => ({
        isInitialized: state.app.isInitialized
    }), { initialize }),
)(App);
