import {connect} from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state, props) => {
    return {
        dialogs: state.dialogsData.dialogs
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;