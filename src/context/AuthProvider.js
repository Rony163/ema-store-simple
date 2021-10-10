import React, { Children, createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const {children} = props;
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;