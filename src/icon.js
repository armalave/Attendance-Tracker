import React from "react";
import profile from "./images/user.png";

const Icon = () => {
    return ( 
        <div className="img">
            <a href="/profile">
                <img src={profile} alt="profile.png" width="50px"/>
            </a>
        </div>
     );
}
 
export default Icon;