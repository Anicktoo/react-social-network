import {connect} from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state, props) => {
    return {
        dialogs: state.dialogsData.dialogs
    };
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;