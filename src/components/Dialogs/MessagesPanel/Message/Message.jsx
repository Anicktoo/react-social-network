import React from "react";
import s from "./Message.module.css";

const Message = ({ userImg, userName, text }) => {
    return (
        <div className={s.message}>
            <div className={s.messageImgContainer}>
                <img
                    src={userImg}
                    alt="user" />
            </div>
            <div className={s.textContainer}>
                <div className={s.textHeader}>
                    <span className={s.userName}>{userName}</span>
                </div>
                <div className={s.textBlock}>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Message;

