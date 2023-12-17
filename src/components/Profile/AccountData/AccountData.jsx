import React from "react";
import s from './AccountData.module.css'
import {classNameFunction} from "../../../tools/classNameCompiler";

const cName = classNameFunction(s);
const AccountData = (props) => {
    return (
        <div className={cName(['account-data'])}>
            <div className={cName(['wallpaper'])}>
                <img
                    src={props.wallpaperImgScr}
                    alt="user's background wallpaper"/>
            </div>
            <div className={cName(['info-container'])}>
                <div className={cName(['avatar'])}>
                    <img src={props.avatarImgSrc}
                         alt="user's avatar"></img>
                </div>
                <div className={cName(['info'])}>
                        <span className={cName(['info-header', 'name'])}>
                            Nikita T.
                        </span>
                    <span className={cName(['info-data', 'date-of-birth'])}>
                            Date of Birth: 10 February
                        </span>
                    <span className={cName(['info-data', 'city'])}>
                            City: Saint-Petersburg
                        </span>
                    <span className={cName(['info-data', 'education'])}>
                            Education: ITMO University
                        </span>
                    <span className={cName(['info-data', 'web-site'])}>
                            Web Site: <a href='https://github.com/Anicktoo'>https://github.com/Anicktoo</a>
                        </span>
                </div>
            </div>
        </div>
    );
};

export default AccountData;