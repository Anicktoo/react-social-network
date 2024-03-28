import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { withRouter } from "../../utils/react-router-legacy"
import defaultUser from '../../img/defaultUser.svg';
import { compose } from 'redux';
import withLoginRedirect from '../hoc/withLoginRedirect';

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
            this.props.accountInfo.aboutMe) {
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
