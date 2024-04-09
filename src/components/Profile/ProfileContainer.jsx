import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import defaultUser from '../../img/defaultUser.svg';
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { withRouter } from "../../utils/react-router-legacy";
import withLoginRedirect from '../hoc/withLoginRedirect';
import Profile from "./Profile";

class ProfileContainer extends Component {

    state = {
        isFetching: false,
    }

    componentDidMount() {
        const userId = this.props.router.params.userId ?? this.props.userId;

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
        this.setState({
            isFetching: true,
        });
    }

    componentDidUpdate() {
        if (this.state.isFetching &&
            this.props.common.photos.small &&
            this.props.common.photos.wallpaper &&
            this.props.accountInfo.aboutMe !== null) {
            this.setState({
                isFetching: false,
            });
        }
    }

    render() {
        return (
            <Profile {...this.props} isFetching={this.state.isFetching} />
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
        }
    ),
)(ProfileContainer);
