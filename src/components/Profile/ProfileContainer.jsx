import React, {Component} from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {addPost, changeTextInput, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "../../tools/react-router-legacy"
import axios from "axios";

class ProfileContainer extends Component {
    componentDidMount() {
        const userId = this.props.router.params.userId ?? 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        common: {
            photos: state.profileData.accountInfo.photos,
        },
        accountInfo: state.profileData.accountInfo,
        newPost: {
            text: state.profileData.newPostTemplate.text,
        },
        posts: state.profileData.posts
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
