import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const LoginPageStyle = styled.div `
    display: flex;
    justify-content: center;
    background-color: black;
    
    a {
        text-decoration: none;
        color: white;
        margin-top: 2rem;
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
        margin-top: 2rem;
        padding: 1em 2em;

        &:hover,
        &:focus { 
        border-color: #1ED760;
        color: #fff;
        }
    }

    .a:hover,
    .a:focus {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.25em);
    }
    .connect_ok {
        margin-top: 2rem;
        color: white;
    }
`;


export default function LoginPage() {

    const [cookies, setCookie] = useCookies(['token']);

    let decoded = new URL(window.location.href);
    let code = decoded.searchParams.get('code')
    if (code) {
        window.localStorage.setItem('code', code);
    }

    useEffect(() => {
        const data = {
            'grant_type': "authorization_code",
            'code': code,
            'redirect_uri': 'http://localhost:3000/login',
            'client_id': process.env.REACT_APP_CLIENT_ID,
            'client_secret': process.env.REACT_APP_CLIENT_SECRET
        }
    

        var formBody = [];
        for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
    
        formBody = formBody.join("&");
    
            fetch('https://accounts.spotify.com/api/token',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
            .then(response => response.json())
            .then(res => {
                setCookie('token', res.access_token, { path: '/'})
            })

    }, [])

    if(cookies.token === 'undefined') {
        return (
            <LoginPageStyle>
                <a href="https://accounts.spotify.com/authorize?client_id=d85447faf99a46b0bdb05147d09e1f88&response_type=code&redirect_uri=http://localhost:3000/login&scope=user-read-private%20user-read-email&state=avecspot">Se connecter</a>
            </LoginPageStyle>
        )
    } else {
        return (
            <LoginPageStyle>
                <p className="connect_ok">Vous êtes connecté, cliquez sur Home</p>
            </LoginPageStyle>
        )
    }
    
}
