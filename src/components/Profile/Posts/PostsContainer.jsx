import {connect} from 'react-redux';
import Posts from './Posts';

const mapStateToProps = (state, props) => {
    return {
        avatarImgSrc: state.profileData.accountInfo.avatarImgSrc,
        posts: state.profileData.posts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
