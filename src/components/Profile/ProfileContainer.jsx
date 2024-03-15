import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { addPost, changeTextInput, getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "../../tools/react-router-legacy"
import defaultUser from '../../img/defaultUser.svg';
import withLoginRedirect from '../hoc/withLoginRedirect';

class ProfileContainer extends Component {
    componentDidMount() {
        const userId = this.props.router.params.userId ?? 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

function mapStateToProps(state) {
    return {
        common: {
            photos: {
                small: state.profile.accountInfo.photos?.small || defaultUser,
                large: state.profile.accountInfo.photos?.large || defaultUser,
                wallpaper: state.profile.accountInfo.photos?.wallpaper,
            },
        },
        accountInfo: state.profile.accountInfo,
        newPost: {
            text: state.profile.newPostTemplate.text,
        },
        posts: state.profile.posts
    };
}
const LoginRedirect = withLoginRedirect(ProfileContainer);
const withURLDataContainerComponent = withRouter(LoginRedirect);

export default connect(
    mapStateToProps,
    {
        addPost,
        changeTextInput,
        getUserProfile,
    }
)(withURLDataContainerComponent);
