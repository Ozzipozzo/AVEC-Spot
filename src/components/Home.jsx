import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import ArtistsCard from './ArtistsCard';
import { useCookies } from 'react-cookie';

const HomeStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export default function Home() {

    const [artists, setArtists] = useState(null);
    const tokentest = useCookies()[0].token;
    const list = 'ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,329e4yvIujISKGKz1BZZbO,66Ok6bgC570sHkw08N20pZ,6eUKZXaKkcviH0Ku9w2n3V,6W5uA6CNMf3hd2j4a2XWCx,1Xyo4u8uXC1ZmMpatF05PJ'

    useEffect(() => {
        fetch('https://api.spotify.com/v1/artists?'+list, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokentest
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setArtists(res.artists)
        })
    }, [])

    console.log(artists);

    if(!artists) {
        return (
            <div>
                <Login/>
                <div>En cours de chargement...</div>
            </div>
        )
    } else {
        return (
            <HomeStyle>
                <Login/>
                {artists.map((artist, index) => {
                    return (
                        <ArtistsCard
                        key={index}
                        img={artist.images[1].url}
                        alt={artist.name}
                        name={artist.name}
                        followers={artist.followers.total}
                        id={artist.id}
                        />
                    )
                })}
            </HomeStyle>
        )
    }

}