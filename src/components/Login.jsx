import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LeftNavBar from './LeftNavBar';

const LoginStyle = styled.div`

    .main_login {
        margin-top: 3rem;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 2rem;

        &:hover,
        &:focus { 
        border-color: #1ED760;
        color: #fff;
        }
    }

    .login_button,
    .logout_button {
        margin-top: 1rem;
        border: 1px solid white;
        border-radius: 10px;
        color: #1ED760;
        transition: 0.25s;
        background: none;
        border: 2px solid;
        font: inherit;
        line-height: 1;
        margin: 0.5em;
        padding: 1em 2em;
    }

    button {  
    color: #1ED760;
    transition: 0.25s;
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    padding: 0.5em 2em;
    border-radius: 10px;
    
    &:hover,
    &:focus { 
        border-color: #1ED760;
        color: #fff;
        }
    }

    .logout_button:hover,
    .logout_button:focus,
    .login_button:hover,
    .login_button:focus {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.25em);
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
                        ? <button className="logout_button" onClick={logout}>{isLoggedIn}</button>
                        : <Link className="login_button" to="/login">Se connecter</Link>
                }
            </div>
        </LoginStyle>
    )
}
