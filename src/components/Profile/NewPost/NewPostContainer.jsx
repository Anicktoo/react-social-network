import {addPostActionCreator, changeNewPostTemplateTextActionCreator} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = (state, props) => {
    return {
        avatarImgSrc: state.profileData.accountInfo.avatarImgSrc,
        text: state.profileData.newPostTemplate.text,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changeTextInput: (text) => {
            dispatch(changeNewPostTemplateTextActionCreator(text));
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
