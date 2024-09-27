import React, { useState } from "react";
import UserContext from "./userContext";

const userContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default userContextProvider