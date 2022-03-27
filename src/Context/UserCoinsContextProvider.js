import React from "react";
const UserCoinsContext = React.createContext();

function UserCoinsContextProvider(props) {

    const [userCoins, setUserCoins] = React.useState(1000)

    return (
        <UserCoinsContext.Provider value={{userCoins, setUserCoins}}>
            {props.children}
        </UserCoinsContext.Provider>
    )
}

export {UserCoinsContextProvider, UserCoinsContext}
