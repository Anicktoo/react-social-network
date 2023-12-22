const store = {
    _state: {
        dialogsData: {
            dialogs: [
                {
                    id: 1,
                    userName: 'Anakin Skywalker',
                    userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l0Iq-GecvCFzfHtm1t9oqOIMLkSQzK81Ew&usqp=CAU',
                    messages: [
                        'Hello',
                        'How are you?',
                        'May the force be with you!'
                    ],
                },
                {
                    id: 2,
                    userName: 'Obi-Wan Kenobi',
                    userImg: 'https://images.hellomagazine.com/horizon/square/991a4758f0ae-star-wars-ep-3-t.jpg',
                    messages: ['Hello there'],
                },
                {
                    id: 3,
                    userName: 'General Grievous',
                    userImg: 'https://pm1.aminoapps.com/5820/03c3bb7f7be9a36f82f61d0d6952a0a2ef674ee8_00.jpg',
                    messages: [
                        'General! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, lobortis eget laoreet fermentum, fermentum a magna. Proin orci elit, accumsan a posuere in, aliquam consectetur nisl. Phasellus malesuada elit eget metus pharetra gravida. Praesent sit amet elementum odio. Morbi vestibulum elit metus, quis bibendum nisl dictum a.',
                        'General! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, lobortis eget laoreet fermentum, fermentum a magna. Proin orci elit, accumsan a posuere in, aliquam consectetur nisl. Phasellus malesuada elit eget metus pharetra gravida. Praesent sit amet elementum odio. Morbi vestibulum elit metus, quis bibendum nisl dictum a.',
                        'General! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, lobortis eget laoreet fermentum, fermentum a magna. Proin orci elit, accumsan a posuere in, aliquam consectetur nisl. Phasellus malesuada elit eget metus pharetra gravida. Praesent sit amet elementum odio. Morbi vestibulum elit metus, quis bibendum nisl dictum a.',
                        'General! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, lobortis eget laoreet fermentum, fermentum a magna. Proin orci elit, accumsan a posuere in, aliquam consectetur nisl. Phasellus malesuada elit eget metus pharetra gravida. Praesent sit amet elementum odio. Morbi vestibulum elit metus, quis bibendum nisl dictum a.',
                        'General! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, lobortis eget laoreet fermentum, fermentum a magna. Proin orci elit, accumsan a posuere in, aliquam consectetur nisl. Phasellus malesuada elit eget metus pharetra gravida. Praesent sit amet elementum odio. Morbi vestibulum elit metus, quis bibendum nisl dictum a.',
                        'General! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, lobortis eget laoreet fermentum, fermentum a magna. Proin orci elit, accumsan a posuere in, aliquam consectetur nisl. Phasellus malesuada elit eget metus pharetra gravida. Praesent sit amet elementum odio. Morbi vestibulum elit metus, quis bibendum nisl dictum a.',
                        'General! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, lobortis eget laoreet fermentum, fermentum a magna. Proin orci elit, accumsan a posuere in, aliquam consectetur nisl. Phasellus malesuada elit eget metus pharetra gravida. Praesent sit amet elementum odio. Morbi vestibulum elit metus, quis bibendum nisl dictum a.',
                    ],
                },
            ],
        },
        profileData: {
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
        },
        friendsData: {
            friends: [
                {
                    id: 1,
                    userName: 'Anakin Skywalker',
                    userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l0Iq-GecvCFzfHtm1t9oqOIMLkSQzK81Ew&usqp=CAU',
                },
                {
                    id: 2,
                    userName: 'Obi-Wan Kenobi',
                    userImg: 'https://images.hellomagazine.com/horizon/square/991a4758f0ae-star-wars-ep-3-t.jpg',
                },
                {
                    id: 3,
                    userName: 'Padme Amidala',
                    userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Amidala.png/220px-Amidala.png',
                },
                {
                    id: 4,
                    userName: 'General Grievous',
                    userImg: 'https://pm1.aminoapps.com/5820/03c3bb7f7be9a36f82f61d0d6952a0a2ef674ee8_00.jpg',
                },
            ],
        }
    },
    get state() {
        return this._state;
    },
    render: function () {
        throw Error('no observer was added');
    },
    subscribe: function (observer) {
        this.render = observer;
    },
    addPost: function () {
        const postText = this._state.profileData.newPostTemplate.text;
        const posts = this._state.profileData.posts;
        const len = posts.length;
        posts.push({
            id: len,
            text: postText,
            likes: 0
        });
        this._state.profileData.newPostTemplate.text = '';
        this.render();
    },
    changeNewPostTemplateText: function (text) {
        this._state.profileData.newPostTemplate.text = text;
    }
}

export default store;