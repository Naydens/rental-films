import { useState } from 'react';

export function useAuth() {
    const [user, setUser] = useState(null);

    function login(credentials) {
        // backend
        if (credentials.login === 'admin' && credentials.password === '123') {
            setUser({
                login: credentials.login
            })
        }
        // backend
    }

    return {
        user: user,
        login: login
    };
}