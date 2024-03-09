import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { addPost, changeTextInput, setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "../../tools/react-router-legacy"
import { profileAPI } from '../../api/api';

class ProfileContainer extends Component {
    componentDidMount() {
        const userId = this.props.router.params.userId ?? 2;
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
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
            photos: state.profile.accountInfo.photos,
        },
        accountInfo: state.profile.accountInfo,
        newPost: {
            text: state.profile.newPostTemplate.text,
        },
        posts: state.profile.posts
    };
}

const withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(
    mapStateToProps,
    {
        addPost,
        changeTextInput,
        setUserProfile
    }
)(withURLDataContainerComponent);
