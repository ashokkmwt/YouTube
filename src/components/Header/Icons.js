import React, { useState } from "react";
import HoverOn from "../../reusable/HoverOn/HoverOn";
import CreatePopup from "./CreatePopup/CreatePopup";
import NotificationPopup from "./NotificationPopup/NotificationPopup";

const Icons = ({ icon, text, style, visit, isCreate, isNotify, _ref }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            style={{ position: "relative" }}
        >
            <img
                width="100%"
                height="100%"
                src={icon}
                alt={text}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => visit(text)}
            />
            {isHover && <HoverOn style={style} text={text} />}
            {isCreate && <CreatePopup _ref={_ref} />}
            {isNotify && <NotificationPopup _ref={_ref} />}
        </div>
    );
};

export default Icons;

// used this method cause map can't be applied here and it's compulsary to make different state for different img tag.