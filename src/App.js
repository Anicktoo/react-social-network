import React from "react";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Nav from './components/Nav/Nav';

import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter basename='/'>
            <div className='app-wrapper'>
                <Header/>
                <div className='inner-wrapper'>
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route path="/profile" element={<Profile
                                avatarImgSrc='https://cs6.pikabu.ru/post_img/big/2015/03/14/9/1426346098_1794791727.jpg'/>}/>
                            <Route path="/dialogs" element={<Dialogs/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
