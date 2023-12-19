import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {};

data.dialogsData = [
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
];

data.profileData = {
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
    posts: [
        {
            id: 0,
            text: 'Hey, React seems cool! I love it!',
            likes: 112,
        },
        {
            id: 1,
            text: 'My post1!',
            likes: 22,
        },
        {
            id: 2,
            text: 'My post2!',
            likes: 41,
        },
        {
            id: 3,
            text: 'My post3!',
            likes: 51,
        },
    ],
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App {...data}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();