import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { compose } from "redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from './components/Nav/Nav';
import InitLoader from "./components/common/initLoader/InitLoader";
import withStoreProvider from "./components/hoc/withStoreProvider";
import { initialize } from './redux/appReducer';
import './styles/App.css';

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));

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
                            <Suspense fallback={<InitLoader />}>
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
                            </Suspense>
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
