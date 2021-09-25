import React, { createContext, useState } from "react";


export const Context = createContext();



export const UserProvider = ({children}) => {
    const [dataUser, setDataUser] = useState([]);
    const [reposUser, setReposUser] = useState([]);
    const [followersUser, setFollowersUser] = useState([]);
    const [followerTemp, setFollowerTemp] = useState([]);
    const [followingUser, setFollowingUser] = useState([]);
 
    return (
        <Context.Provider value=
            {{
                dataUser,
                setDataUser,
                reposUser,
                setReposUser,
                followersUser, 
                setFollowersUser, 
                followerTemp, 
                setFollowerTemp,
                followingUser, 
                setFollowingUser
            }}>
            {children}
        </Context.Provider>
    )
}