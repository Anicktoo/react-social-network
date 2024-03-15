import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import withLoginRedirect from '../hoc/withLoginRedirect';
import { compose } from 'redux';

const mapStateToProps = (state, props) => {
    return {
        dialogs: state.dialogs.dialogs,
    };
}

export default compose(
    withLoginRedirect,
    connect(mapStateToProps)
)(Dialogs);