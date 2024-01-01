import {connect} from 'react-redux';
import Post from './Post';

const mapStateToProps = (state, props) => {
    const postInfo = state.profileData.posts.find(el => el.id === props.id);
    return {
        avatarImgSrc: props.avatarImgSrc,
        text: postInfo.text,
        likes: postInfo.likes,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;
