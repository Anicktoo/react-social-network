import { connect } from 'react-redux';
import { compose } from 'redux';
import withLoginRedirect from '../hoc/withLoginRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogs,
    };
}

export default compose(
    withLoginRedirect,
    connect(mapStateToProps)
)(Dialogs);