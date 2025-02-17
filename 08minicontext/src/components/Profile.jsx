import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);
    if(!user){
        return (
            <p>please login</p>
        )
    }
    if(user.username=="" || user.password==""){
        return (
            <p>please enter credentials</p>
        )
    }

    return (
        <div>
        <p>Welcome {user.username} </p>
        <p>Password : {user.password} </p>
        </div>
    )
}

export default Profile;