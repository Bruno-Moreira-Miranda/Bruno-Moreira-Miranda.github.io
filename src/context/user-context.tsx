import React, { Dispatch, SetStateAction, useContext, useState } from "react";

import { IUserID } from "interfaces/i-user";

const Context = React.createContext<UserContextValue | null>(null);

interface Props {
    children: JSX.Element
}

interface UserContextValue {
    user: IUserID | null
    setUser: Dispatch<SetStateAction<IUserID | null>>
}

function UserIDContext({ children }: Props) {
    const [user, setUser] = useState<IUserID | null>(null);

    const value: UserContextValue = {
        user,
        setUser
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

function useGetUserID() {
    const { user } = useContext(Context) as UserContextValue;
    return user;
}

function useSetUserID() {
    const { setUser } = useContext(Context) as UserContextValue;
    return setUser;
}

export { UserIDContext, useGetUserID, useSetUserID };