import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import withLoginRedirect from '../hoc/withLoginRedirect';

const mapStateToProps = (state, props) => {
    return {
        dialogs: state.dialogs.dialogs,
    };
}

const withRedirect = withLoginRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps)(withRedirect);

export default DialogsContainer;