import React, { useEffect, useMemo, useState } from "react";
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
    //for jest (DO NOT REMOVE)
    if (e instanceof TypeError) {
        images = [];
    }
    else {
        throw e;
    }
}



const AccountData = ({ isFetching, photos, fullName, aboutMe, updateUserStatus, contacts, isOwner, savePhoto }) => {

    const [isPhotoFetching, setIsPhotoFetching] = useState(false);

    useEffect(() => {
        setIsPhotoFetching(false);
    }, [photos.large])

    const wallpaper = useMemo(() => {
        return isFetching ?
            <Preloader /> :
            photos.wallpaper ?
                <img
                    src={photos.wallpaper}
                    alt="user's background wallpaper" /> :
                <div className={cName(['wallpaper-default'])}></div>
    }, [isFetching, photos.wallpaper]);

    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            setIsPhotoFetching(true);
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div className={cName(['account-data'])}>
            <div className={cName(['wallpaper'])}>
                {wallpaper}
            </div>
            <div className={cName(['info-container'])}>
                <div className={cName(['avatar'])}>
                    {(isFetching || isPhotoFetching) ?
                        <Preloader /> :
                        <>
                            <img src={photos.large}
                                alt="user's avatar"></img>
                            {isOwner && <label><input type="file" onChange={onMainPhotoChange} /></label>}
                        </>}
                </div>
                <div className={cName(['info'])}>
                    {isFetching ?
                        <Preloader content={'#'.repeat(20)} /> :
                        <span className={cName(['info-header', 'name'])}>
                            {fullName}
                        </span>
                    }
                    <div className={cName(['info-data-additional'])}>
                        {isFetching ?
                            <Preloader content={'#'.repeat(20)} /> :
                            <>
                                <ProfileStatusHooks aboutMe={aboutMe} updateUserStatus={updateUserStatus} isOwner={isOwner} />
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