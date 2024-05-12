import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import defaultUser from '../../img/defaultUser.svg';
import { getUserProfile, getUserStatus, savePhoto, updateUserStatus } from "../../redux/profileReducer";
import { withRouter } from "../../utils/react-router-legacy";
import withLoginRedirect from '../hoc/withLoginRedirect';
import Profile from "./Profile";

const ProfileContainer = (props) => {
    const { userId: myId, router: { params: { userId } } } = props;
    const currentId = userId ?? myId;
    const isOwner = !userId;

    useEffect(() => {
        props.getUserProfile(currentId);
        props.getUserStatus(currentId);
    }, [currentId]);

    return (
        <Profile {...props} isOwner={isOwner} />
    );
}

function mapStateToProps(state) {
    return {
        userId: state.auth.id,
        common: {
            photos: {
                small: state.profile.accountInfo.photos?.small || defaultUser,
                large: state.profile.accountInfo.photos?.large || defaultUser,
                wallpaper: state.profile.accountInfo.photos?.wallpaper,
            },
        },
        accountInfo: state.profile.accountInfo,
        posts: state.profile.posts
    };
}

export default compose(
    withRouter,
    withLoginRedirect,
    connect(
        mapStateToProps,
        {
            getUserProfile,
            getUserStatus,
            updateUserStatus,
            savePhoto,
        }
    ),
)(ProfileContainer);
