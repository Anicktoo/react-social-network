import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { withRouter } from "../../utils/react-router-legacy"
import defaultUser from '../../img/defaultUser.svg';
import withLoginRedirect from '../hoc/withLoginRedirect';
import { compose } from 'redux';

class ProfileContainer extends Component {
    componentDidMount() {
        const userId = this.props.router.params.userId ?? this.props.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
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
            isFetching: state.profile.accountInfo.isFetching,
        },
        accountInfo: state.profile.accountInfo,
        posts: state.profile.posts
    };
}

export default compose(
    withLoginRedirect,
    withRouter,
    connect(
        mapStateToProps,
        {
            getUserProfile,
            getUserStatus,
            updateUserStatus,
        }
    )
)(ProfileContainer);
