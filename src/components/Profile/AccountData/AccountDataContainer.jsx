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

const AccountDataContainer = connect(mapStateToProps)(AccountData);

export default AccountDataContainer;