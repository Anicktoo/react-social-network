
import React, { Component } from 'react';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import NewPostForm from './NewPostForm';

class NewPostFormContainer extends Component {

    onKeyUp = (e, handleSubmit) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
    }

    render() {
        return (
            <NewPostForm {...this.props} onKeyUp={this.onKeyUp} isFetching={this.props.isFetching} />
        );
    }
}

export default compose(
    reduxForm({
        form: "newPost",
    })
)(NewPostFormContainer);
