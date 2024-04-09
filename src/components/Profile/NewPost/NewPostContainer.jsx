import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPost } from '../../../redux/profileReducer';
import NewPost from './NewPost';

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
