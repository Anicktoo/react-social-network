import React, { Component } from 'react';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import AddMessageForm from './AddMessageForm';

class AddMessageFormContainer extends Component {
    onKeyUp = (e, handleSubmit) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
    }

    render() {
        return (
            <AddMessageForm {...this.props} onKeyUp={this.onKeyUp} />
        );
    }
}

export default compose(
    reduxForm({
        form: 'messages'
    })
)(AddMessageFormContainer);
