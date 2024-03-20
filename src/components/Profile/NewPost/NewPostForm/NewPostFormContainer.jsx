
import React, { Component } from 'react';
import NewPostForm from './NewPostForm';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

class NewPostFormContainer extends Component {

    onKeyUp = (e, handleSubmit) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
    }

    render() {
        return (
            <NewPostForm {...this.props} onKeyUp={this.onKeyUp} />
        );
    }
}

export default compose(
    reduxForm({
        form: "newPost",
    })
)(NewPostFormContainer);
