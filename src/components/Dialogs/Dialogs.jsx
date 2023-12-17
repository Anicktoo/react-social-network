import React from 'react';
import s from './Dialogs.module.css'
import MessageContainer from "./MessageContainer/MessageContainer";
import DialogItem from "./DialogItem/DialogItem";
import {Route, Routes} from "react-router-dom";


const Dialogs = () => {
    return (
        <main className={s.dialogs}>
            <div className={s.dialogContainer}>
                <header className={s.dialogHeader}>
                    <span className={s.dialogHeaderText}>All Dialogs</span>
                </header>
                <div className={s.dialogItems}>
                    <DialogItem name='Anakin Skywalker' id='1'/>
                    <DialogItem name='General Grievous' id='2'/>
                </div>
            </div>
            <Routes>

                <Route path='/1' element={<MessageContainer userName='Anakin Skywalker'
                                                            userImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l0Iq-GecvCFzfHtm1t9oqOIMLkSQzK81Ew&usqp=CAU'
                                                            messages={['Hello', 'How are you?']}/>}>

                </Route>
                <Route path='/2' element={<MessageContainer userName='General Grievous'
                                                            userImg='https://pm1.aminoapps.com/5820/03c3bb7f7be9a36f82f61d0d6952a0a2ef674ee8_00.jpg'
                                                            messages={['General!']}/>}>

                </Route>
            </Routes>
            {/*<MessageContainer userName='Anakin Skywalker'*/}
            {/*                  userImg='https://static-00.iconduck.com/assets.00/send-icon-2048x1993-sijmumqa.png'*/}
            {/*                  messages={['Hello', 'How are you?']}/>*/}
        </main>
    );
};

export default Dialogs;