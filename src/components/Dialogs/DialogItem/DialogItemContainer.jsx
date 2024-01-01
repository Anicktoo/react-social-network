import {connect} from 'react-redux';
import DialogItem from './DialogItem';

const mapStateToProps = (state, props) => {
    const dialogItemInfo = state.dialogsData.dialogs.find(el => el.id === props.id);
    return {
        id: dialogItemInfo.id,
        userName: dialogItemInfo.userName,
        userImg: dialogItemInfo.userImg,
        messagePreview: dialogItemInfo.messages[0].text,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);

export default DialogItemContainer;

