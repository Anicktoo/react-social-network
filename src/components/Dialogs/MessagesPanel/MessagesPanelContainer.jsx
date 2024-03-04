import MessagesPanel from "./MessagesPanel";
import {changeNewMessageTemplateText, sendMessage} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state, props) => {

    const dialogInfo = props.dialogItemInfo;

    return {
        id: dialogInfo.id,
        messageText: dialogInfo.template.text,
        messages: dialogInfo.messages,
        userName: dialogInfo.userName,
        userImg: dialogInfo.userImg,
        myImage: state.profileData.accountInfo.photos.small,
        myName: state.profileData.accountInfo.fullName,
    };
}

const MessagesPanelContainer = connect(mapStateToProps, {
    sendMessage,
    changeNewMessageTemplateText
})(MessagesPanel);

export default MessagesPanelContainer;

