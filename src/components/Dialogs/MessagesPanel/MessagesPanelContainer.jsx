import MessagesPanel from "./MessagesPanel";
import {changeNewMessageTemplateTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state, props) => {

    const dialogInfo = state.dialogsData.dialogs.find(el => el.id === props.id);

    return {
        id: dialogInfo.id,
        messageText: dialogInfo.template.text,
        messages: dialogInfo.messages,
        userName: dialogInfo.userName,
        userImg: dialogInfo.userImg,
        myImage: state.profileData.accountInfo.avatarImgSrc,
        myName: state.profileData.accountInfo.name,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (id) => {
            dispatch(sendMessageActionCreator(id));
        },
        changeNewMessageTemplateText: (id, value) => {
            dispatch(changeNewMessageTemplateTextActionCreator(id, value));
        },
    }
}

const MessagesPanelContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesPanel);

export default MessagesPanelContainer;

