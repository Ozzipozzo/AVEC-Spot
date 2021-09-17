import React from 'react'
import { useHistory } from 'react-router';


export default function LoginPage() {

    let history = useHistory();

    let decoded = new URL(window.location.href);
    let code = decoded.searchParams.get('code')
    if (code) {
        window.localStorage.setItem('code', code);
        history.push('/')
    }

    return (
        <div>
            <a href="https://accounts.spotify.com/authorize?client_id=d85447faf99a46b0bdb05147d09e1f88&response_type=code&redirect_uri=http://localhost:3000/login&scope=user-read-private%20user-read-email&state=avecspot">se connecter</a>
        </div>
    )
}
