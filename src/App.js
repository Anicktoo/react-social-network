import React from "react";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Nav from './components/Nav/Nav';
import './styles/App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";

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
                                       <Profile {...props.profileData}/>
                                   }
                            />
                            <Route path="dialogs/*"
                                   element={
                                       <Dialogs {...props.dialogsData}/>
                                   }
                            />
                            <Route path="friends/*"
                                   element={
                                       <Friends {...props.friendsData}/>
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
