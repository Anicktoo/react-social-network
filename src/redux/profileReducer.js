import deepcopy from "deepcopy";

export const actions = Object.freeze({
    ADD_POST: 'ADD_POST',
    CHANGE_NEW_POST_TEMPLATE_TEXT: 'CHANGE_NEW_POST_TEMPLATE_TEXT'
});
const profilesReducer = (profileData, action) => {

    const profileDataCopy = deepcopy(profileData);

    switch (action.type) {
        case actions.CHANGE_NEW_POST_TEMPLATE_TEXT: {
            profileDataCopy.newPostTemplate.text = action.text;
            return profileDataCopy;
        }
        case actions.ADD_POST: {
            const postTemp = profileDataCopy.newPostTemplate
            const trimmedText = postTemp.text.trim();
            if (trimmedText === '') {
                return profileDataCopy;
            }
            const posts = profileDataCopy.posts;
            const len = posts.length;
            posts.push({
                id: len,
                text: trimmedText,
                likes: 0
            });
            postTemp.text = '';
            return profileDataCopy;
        }
        default: {
            return profileDataCopy;
        }
    }
}

export const addPostActionCreator = () => ({
    type: actions.ADD_POST
})
export const changeNewPostTemplateTextActionCreator = (text) => ({
    type: actions.CHANGE_NEW_POST_TEMPLATE_TEXT,
    text: text,
})

export default profilesReducer;
