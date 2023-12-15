import React from 'react';
import c from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <main className={c.dialogs}>
            <div className={c.dialogContainer}>
                <header className={c.dialogHeader}>
                    <span className={c.dialogHeaderText}>All Dialogs</span>
                </header>
                <div className={c.dialogItems}>
                    <div className={c.dialog}>Valera</div>
                    <div className={c.dialog}>Sasha</div>
                    <div className={c.dialog}>Egor</div>
                </div>
            </div>
            <div className={c.messageContainer}>
                <header className={c.messageHeader}>
                    <span className={c.messageHeaderText}>**Name and avatar</span>
                </header>
                <div className={c.messageItems}>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className={c.writingPanel}>
                    <div className={c.inputWrapper}>
                        <div className={c.textInput} aria-label='your message...'
                             contentEditable="true" role="textbox" aria-multiline="true">
                        </div>
                    </div>
                    <div className={c.sendButtonContainer}>
                        <img
                            src="https://static-00.iconduck.com/assets.00/send-icon-2048x1993-sijmumqa.png"
                            alt="send button"/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dialogs;