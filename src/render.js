import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const render = (args) => {
    root.render(
        <React.StrictMode>
            <App {...args.state} saveCursorPosition={args.saveCursorPosition} addPost={args.addPost}
                 changeNewPostTemplateText={args.changeNewPostTemplateText}/>
        </React.StrictMode>
    );
};