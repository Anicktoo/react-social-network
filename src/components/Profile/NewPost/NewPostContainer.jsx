import {addPost, changeTextInput} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = (state, props) => {
    return {
        avatarImgSrc: state.profileData.accountInfo.avatarImgSrc,
        text: state.profileData.newPostTemplate.text,
    }
}

const NewPostContainer = connect(mapStateToProps, {
    addPost,
    changeTextInput
})(NewPost);

export default NewPostContainer;
