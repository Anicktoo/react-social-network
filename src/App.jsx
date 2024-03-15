import React from "react";
import Nav from './components/Nav/Nav';
import './styles/App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";

const App = () => {
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
                                    <Login />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
