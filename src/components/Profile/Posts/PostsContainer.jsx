import {connect} from 'react-redux';
import Posts from './Posts';

const mapStateToProps = (state, props) => {
    return {
        avatarImgSrc: state.profileData.accountInfo.avatarImgSrc,
        posts: state.profileData.posts
    };
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
