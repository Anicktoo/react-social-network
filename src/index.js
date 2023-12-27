import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import Store from "./redux/store";

const store = new Store();
const root = ReactDOM.createRoot(document.getElementById('root'));
export const render = () => {
    root.render(
        <React.StrictMode>
            <App {...store.state} dispatch={store.dispatch}/>
        </React.StrictMode>
    );
};

store.subscribe(render);

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();