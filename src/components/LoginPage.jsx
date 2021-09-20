import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';


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
            'client_id': 'd85447faf99a46b0bdb05147d09e1f88',
            'client_secret': 'b0c0fb31bb8c4e0f99793e8c43c0eb1a'
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
                console.log(res)
                setCookie('token', res.access_token, { path: '/'})
            })
            
    }, [])

    console.log(cookies)
    if(cookies.token === 'undefined') {
        return (
            <div>
                <a href="https://accounts.spotify.com/authorize?client_id=d85447faf99a46b0bdb05147d09e1f88&response_type=code&redirect_uri=http://localhost:3000/login&scope=user-read-private%20user-read-email&state=avecspot">se connecter</a>
            </div>
        )
    } else {
        return (
            <div>Vous êtes connecté, cliquez sur Home</div>
        )
    }
    
}
