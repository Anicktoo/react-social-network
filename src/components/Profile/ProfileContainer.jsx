import React, {Component} from 'react';
import {connect} from 'react-redux';
import Profile from "./Profile";
import {addPost, changeTextInput, setUserProfile} from "../../redux/profileReducer";
import axios from "axios";

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
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

export default connect(
    mapStateToProps,
    {
        addPost,
        changeTextInput,
        setUserProfile
    }
)(ProfileContainer);
