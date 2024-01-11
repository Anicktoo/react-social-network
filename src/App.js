import React from "react";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import './styles/App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='inner-wrapper'>
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route path='/' element={<Navigate to='/profile' replace={true}/>}/>
                            <Route path="profile/*"
                                   element={
                                       <Profile/>
                                   }
                            />
                            <Route path="dialogs/*"
                                   element={
                                       <DialogsContainer/>
                                   }
                            />
                            <Route path="friends/*"
                                   element={
                                       <UsersContainer/>
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
