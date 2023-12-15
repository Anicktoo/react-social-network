import c from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={c.message}>
            <div className={c.messageImgContainer}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l0Iq-GecvCFzfHtm1t9oqOIMLkSQzK81Ew&usqp=CAU"
                    alt="user's avatar"/>
            </div>
            <div className={c.textContainer}>
                <div className={c.textHeader}>
                    <span className={c.userName}>Anakin Skywalker</span>
                </div>
                <div className={c.textBlock}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a nisi sed lacus venenatis
                        feugiat. Ut tempor nisl vitae tristique euismod. Integer non urna vel risus mollis iaculis.
                        Cras pretium augue et leo mattis efficitur. Ut vitae lacus mattis, gravida odio vel, elementum
                        mauris.
                        Quisque sapien nulla, elementum eu justo vitae, fringilla vestibulum arcu. Fusce nulla diam,
                        tincidunt ac faucibus
                    </p>
                    <p>
                        Integer
                        iaculis eget est id imperdiet. Donec a egestas orci, et vehicula sem. In sit amet porttitor
                        eros.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Message;

