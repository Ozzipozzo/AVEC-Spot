import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const LoginStyle = styled.div`


    display: flex;
    justify-content: flex-end;
    width: 80%;
    .main_login {
        margin-top: 1rem;
        border: 1px solid white;
        border-radius: 10px;
    }
    a {
        text-decoration: none;
        color: white;
        padding: 2rem;
    }
`;

export default function Login() {

    const [cookies, setCookies, removeCookie] = useCookies(["token"]);
    const tokentest = useCookies()[0].token;
    let history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokentest
            }
        })
        .then(res => res.json())
        .then(res => {
            setIsLoggedIn(res.id)
        })
    }, [])

    const logout = () => {
        removeCookie('token');
        window.location.reload(false);
    }

    return (
        <LoginStyle>
            <div className="main_login">
                {
                    isLoggedIn 
                    ? <button onClick={logout}>{isLoggedIn}</button>
                    : <Link to="/login">Se connecter</Link>
                }
            </div>
        </LoginStyle>
    )
}
