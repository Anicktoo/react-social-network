import {connect} from 'react-redux';
import AccountData from './AccountData';

const mapStateToProps = (state, props) => {
    const info = state.profileData.accountInfo;
    return {
        avatarImgSrc: info.avatarImgSrc,
        wallpaperImgSrc: info.wallpaperImgSrc,
        name: info.name,
        additionalData: info.additionalData,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const AccountDataContainer = connect(mapStateToProps, mapDispatchToProps)(AccountData);

export default AccountDataContainer;