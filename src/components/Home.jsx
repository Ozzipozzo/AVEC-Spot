import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from './Login';

const HomeStyle = styled.div`

`;
export default function Home() {

    const [artists, setArtists] = useState(null);
    const token = window.localStorage.getItem('token');

    const list = 'ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,329e4yvIujISKGKz1BZZbO,66Ok6bgC570sHkw08N20pZ,6eUKZXaKkcviH0Ku9w2n3V,6W5uA6CNMf3hd2j4a2XWCx,1Xyo4u8uXC1ZmMpatF05PJ,05hirnMeVIzCrcUxbrysZU,6M2wZ9GZgrQXHCFfjv46we'

    useEffect(() => {
        fetch('https://api.spotify.com/v1/artists?'+list, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setArtists(res.artists)
        })
    }, [])

    if(!artists) {
        <div>En cours de chargement...</div>
    }

    return (
        <HomeStyle>
            <Login/>
            <h1>welcome to lol</h1>
        </HomeStyle>
    )
}