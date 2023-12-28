import deepcopy from "deepcopy";

export const actions = Object.freeze({
    ADD_POST: 'ADD_POST',
    CHANGE_NEW_POST_TEMPLATE_TEXT: 'CHANGE_NEW_POST_TEMPLATE_TEXT'
});

const defaultState = {
    accountInfo: {
        name: 'Nikita T.',
        additionalData: [
            {
                fieldName: 'Date Of Birth',
                value: '10 February'
            },
            {
                fieldName: 'City',
                value: 'Saint-Petersburg'
            },
            {
                fieldName: 'Education',
                value: 'ITMO University',
                link: 'https://itmo.ru/'
            },
            {
                fieldName: 'Web Site',
                value: 'https://github.com/Anicktoo',
                link: 'https://github.com/Anicktoo',
            },

        ],
        avatarImgSrc: 'https://assets1.ignimgs.com/2019/05/30/revan-galaxy-of-heroes-tall-1536x864-1559249534297.jpg',
        wallpaperImgSrc: 'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg',
    },
    newPostTemplate: {
        text: '',
    },
    posts: [
        {
            id: 0,
            text: 'Hey, React seems cool! I love it!',
            likes: 112,
        },
        {
            id: 1,
            text: 'My post!',
            likes: 22,
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada massa nec sem elementum, vel vulputate odio ornare. Nunc eleifend diam sit amet luctus rutrum. Aenean a mi at nibh feugiat vestibulum eget sit amet mauris. Aliquam erat volutpat. Nam varius ultricies est et pulvinar. Vivamus facilisis mauris eu sem hendrerit dignissim. Integer fermentum justo in neque sollicitudin, ac viverra dolor aliquet. Aenean posuere augue at mauris aliquet tempus. Duis ac nisl suscipit, aliquet orci et, rhoncus nisl. Proin sollicitudin dui sit amet purus hendrerit pellentesque. Aliquam at dictum justo. Nulla sagittis, quam vel cursus finibus, ex dui iaculis quam, placerat condimentum augue purus iaculis ex.\n' +
                '\n' +
                'Sed sed dapibus dui, tempor porttitor erat. Sed consequat viverra lorem. Vestibulum a tempus tortor. Ut quis justo ac tellus molestie dictum a et mauris. Mauris consectetur a libero vestibulum imperdiet. Proin sed velit id erat congue hendrerit eget id ante. Sed facilisis neque ac fringilla finibus. Praesent tellus libero, convallis et varius non, efficitur in elit. Morbi ipsum ex, pretium eu vestibulum elementum, varius in sapien. Curabitur ac arcu neque. Donec non eros et mi vestibulum tincidunt. Integer efficitur in odio a blandit. Cras feugiat erat augue, eget venenatis justo pulvinar ac. Pellentesque quis tortor ut elit malesuada egestas vitae non ante. Donec iaculis molestie quam, ut gravida risus porttitor quis.',
            likes: 41,
        },
        {
            id: 3,
            text: 'My post!',
            likes: 51,
        },
    ],
}
const profilesReducer = (profileData = defaultState, action) => {

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
