import profilesReducer, { deletePost, savePost } from "./profileReducer";

const POST_TEXT = 'TEST POST';
const state = {
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
};

test('length of posts should be incremented', () => {
    //1. test data
    const action = savePost(POST_TEXT);
    //2. action
    const newState = profilesReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    //1. test data
    const action = savePost(POST_TEXT);
    //2. action
    const newState = profilesReducer(state, action);
    //3. expectation
    expect(newState.posts[4].text).toBe(POST_TEXT);
});

test('after deleteing length of posts should be decremented', () => {
    //1. test data
    const action = deletePost(1);
    //2. action
    const newState = profilesReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
});

test('after deleteing length of posts shouldn`t be decremented if id is incorrect', () => {
    //1. test data
    const action = deletePost(1000);
    //2. action
    const newState = profilesReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
});