import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from './Login';

const HomeStyle = styled.div`

`;
export default function Home() {

    const [artists, setArtists] = useState(null);
    const token = window.localStorage.getItem('token');

    useEffect(() => {
        fetch('https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6', {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        
    }, [])


    return (
        <HomeStyle>
            <Login/>
            <h1>welcome to lol</h1>
        </HomeStyle>
    )
}