import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessage } from "../../../redux/dialogsReducer";
import MessagesPanel from "./MessagesPanel";

class MessagesPanelContainer extends Component {

    onSubmit = (formData) => {
        this.props.sendMessage(this.props.id, formData.newMessageBody);
    }

    render() {
        return <MessagesPanel {...this.props} onSubmit={this.onSubmit} />
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props.dialogItemInfo,
        myImage: state.auth.image,
        myName: state.auth.login,
    };
};

export default compose(
    connect(mapStateToProps, {
        sendMessage
    })
)(MessagesPanelContainer);


