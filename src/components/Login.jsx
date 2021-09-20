import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useState } from 'react';

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

    const tokentest = useCookies()[0].token;

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
            console.log(res)
            setIsLoggedIn(res.id)
        })
    }, [])


    console.log(isLoggedIn);

    return (
        <LoginStyle>
            <div className="main_login">
                {
                    isLoggedIn 
                    ? <Link tp="#">{isLoggedIn}</Link>
                    : <Link to="/login">Se connecter</Link>
                }
            </div>
        </LoginStyle>
    )
}
