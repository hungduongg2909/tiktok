import { useEffect, useState, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { login } from '~/redux/actions/authAction';
import { useDispatch } from 'react-redux';

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const isMounted = useRef(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isMounted) {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLoggedIn(true);
                    dispatch(login());
                }
            });
        }

        return () => {
            isMounted.current = false;
        };
    }, [isMounted]);

    return loggedIn;
};
