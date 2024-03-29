import React from "react";
import s from './AccountData.module.css'
import { classNameFunction } from "../../../utils/classNameCompiler";
// import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const cName = classNameFunction(s);

function importAll(r) {
    const entries = r.keys().map((item) => [item.split(/\.\/?/)[1], r(item)]);
    return Object.fromEntries(entries);
}

const images = importAll(require.context('../../../img/socials', false, /\.(png|jpe?g|svg)$/));

const AccountData = (props) => {
    const wallpaper = props.isFetching ?
        <Preloader />
        :
        props.photos.wallpaper ?
            <img
                src={props.photos.wallpaper}
                alt="user's background wallpaper" />
            :
            <div className={cName(['wallpaper-default'])}></div>
        ;

    return (
        <div className={cName(['account-data'])}>
            <div className={cName(['wallpaper'])}>
                {wallpaper}
            </div>
            <div className={cName(['info-container'])}>
                <div className={cName(['avatar'])}>
                    {props.isFetching ?
                        <Preloader />
                        :
                        <img src={props.photos.large}
                            alt="user's avatar"></img>}
                </div>
                <div className={cName(['info'])}>
                    {props.isFetching ?
                        <Preloader content={'#'.repeat(20)} />
                        :
                        <span className={cName(['info-header', 'name'])}>
                            {props.fullName}
                        </span>
                    }
                    <div className={cName(['info-data-additional'])}>
                        {props.isFetching ?
                            <Preloader content={'#'.repeat(20)} />
                            :
                            <>
                                <ProfileStatusHooks aboutMe={props.aboutMe} updateUserStatus={props.updateUserStatus} />
                                <div className={cName(['info-contacts'])}>
                                    {Object.entries(props.contacts)
                                        .filter(entry => entry[1])
                                        .map(entry => {
                                            const imgPath = images[entry[0]];
                                            return <a href={entry[1]}>
                                                <img src={imgPath} alt={entry[0]} />
                                            </a>
                                        })
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountData;