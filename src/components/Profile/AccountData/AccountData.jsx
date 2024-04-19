import React from "react";
import { classNameFunction } from "../../../utils/classNameCompiler";
import Preloader from "../../common/Preloader/Preloader";
import s from './AccountData.module.css';
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const cName = classNameFunction(s);

function importAll(r) {
    const entries = r.keys().map((item) => [item.split(/\.\/?/)[1], r(item)]);
    return Object.fromEntries(entries);
}

let images;
try {
    images = importAll(require.context('../../../img/socials', false, /\.(png|jpe?g|svg)$/));
}
catch (e) {
    //for jest
    if (e instanceof TypeError) {
        images = [];
    }
    else {
        throw e;
    }
}

const AccountData = ({ isFetching, photos, fullName, aboutMe, updateUserStatus, contacts }) => {
    const wallpaper = isFetching ?
        <Preloader />
        :
        photos.wallpaper ?
            <img
                src={photos.wallpaper}
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
                    {isFetching ?
                        <Preloader />
                        :
                        <img src={photos.large}
                            alt="user's avatar"></img>}
                </div>
                <div className={cName(['info'])}>
                    {isFetching ?
                        <Preloader content={'#'.repeat(20)} />
                        :
                        <span className={cName(['info-header', 'name'])}>
                            {fullName}
                        </span>
                    }
                    <div className={cName(['info-data-additional'])}>
                        {isFetching ?
                            <Preloader content={'#'.repeat(20)} />
                            :
                            <>
                                <ProfileStatusHooks aboutMe={aboutMe} updateUserStatus={updateUserStatus} />
                                <div className={cName(['info-contacts'])}>
                                    {Object.entries(contacts)
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