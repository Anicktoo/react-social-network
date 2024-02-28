import {connect} from 'react-redux';
import DialogItem from './DialogItem';

const mapStateToProps = (state, props) => {
    return {
        id: props.dialogItemInfo.id,
        userName: props.dialogItemInfo.userName,
        userImg: props.dialogItemInfo.userImg,
        messagePreview: props.dialogItemInfo.messages[0].text,
    };
}

const DialogItemContainer = connect(mapStateToProps)(DialogItem);

export default DialogItemContainer;

