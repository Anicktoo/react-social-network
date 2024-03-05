import React from "react";
import s from './AccountData.module.css'
import {classNameFunction} from "../../../tools/classNameCompiler";

const cName = classNameFunction(s);

function importAll(r) {
    const entries = r.keys().map((item) => [item.split(/\.\/?/)[1], r(item)]);
    return Object.fromEntries(entries);
}

const images = importAll(require.context('../../../img/socials', false, /\.(png|jpe?g|svg)$/));

const AccountData = (props) => {
    return (
        <div className={cName(['account-data'])}>
            <div className={cName(['wallpaper'])}>
                <img
                    src={props.photos?.large}
                    alt="user's background wallpaper"/>
            </div>
            <div className={cName(['info-container'])}>
                <div className={cName(['avatar'])}>
                    <img src={props.photos?.small}
                         alt="user's avatar"></img>
                </div>
                <div className={cName(['info'])}>
                    <span className={cName(['info-header', 'name'])}>
                        {props.fullName}
                    </span>
                    <div className={cName(['info-data-additional'])}>
                        <span className={cName(['info-about'])}>{props.aboutMe}</span>
                        <div className={cName(['info-contacts'])}>
                            {Object.entries(props.contacts)
                                .filter(entry => entry[1])
                                .map(entry => {
                                    const imgPath = images[entry[0]];
                                    return <a href={entry[1]}>
                                        <img src={imgPath} alt={entry[0]}/>
                                    </a>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountData;