import React, { useContext } from "react";

import ThemeContext from "../context/ThemeContext";
const Desc = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`desc-container ${theme}`}>
            <h2 className={`desc-title ${theme}`}>Welcome to My Portfolio</h2>
            <p className={`desc-text ${theme}`}>
                I am a passionate developer specializing in building exceptional digital experiences. Explore my projects and skills below!
            </p>
        </div>
    );
};

export default Desc;