import React from "react";
import s from './AccountData.module.css'
import {classNameFunction} from "../../../tools/classNameCompiler";

const cName = classNameFunction(s);
const AccountData = (props) => {
    return (
        <div className={cName(['account-data'])}>
            <div className={cName(['wallpaper'])}>
                <img
                    src={props.wallpaperImgSrc}
                    alt="user's background wallpaper"/>
            </div>
            <div className={cName(['info-container'])}>
                <div className={cName(['avatar'])}>
                    <img src={props.avatarImgSrc}
                         alt="user's avatar"></img>
                </div>
                <div className={cName(['info'])}>
                    <span className={cName(['info-header', 'name'])}>
                        {props.name}
                    </span>
                    <div className={cName(['info-data-additional'])}>
                        {props.additionalData.map((field, index) =>
                            <span key={index} className={cName(['info-data'])}>
                                {`${field.fieldName}: `}{field.link ?
                                <a href={field.link}>{field.value}</a> : field.value}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountData;