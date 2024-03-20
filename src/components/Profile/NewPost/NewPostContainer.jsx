import React, { Component } from 'react';
import NewPost from './NewPost';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';

class NewPostContainer extends Component {

    onSubmit = (formData) => {
        this.props.addPost(formData.newPostText);
    }

    render() {
        return (
            <NewPost {...this.props} onSubmit={this.onSubmit} />
        );
    }
}

export default compose(
    connect(null, {
        addPost
    })
)(NewPostContainer);
