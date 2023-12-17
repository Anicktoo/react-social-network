import s from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.messageImgContainer}>
                <img
                    src={props.userImg}
                    alt="user's avatar"/>
            </div>
            <div className={s.textContainer}>
                <div className={s.textHeader}>
                    <span className={s.userName}>{props.userName}</span>
                </div>
                <div className={s.textBlock}>
                    <p>
                        {props.message}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Message;

