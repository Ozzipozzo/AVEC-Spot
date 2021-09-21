import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import AlbumsCard from './AlbumsCard';
import styled from 'styled-components';
import LeftNavBar from './LeftNavBar';

const ArtistDetailStyle = styled.div`

    display: flex;
    background-color: #1b1919;

    .artist_detail_container {
        display: flex;
        flex-wrap: wrap;
        padding-left: 8rem;
        padding-top: 3rem;
        overflow-y: auto;

    }

`;

export default function ArtistDetail() {

    let { id } = useParams();
    const tokentest = useCookies()[0].token;
    const [albums, setAlbums] = useState(null)
    

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokentest
            }
        })
        .then(res => res.json())
        .then(res => {
            setAlbums(res.items)
        })
    }, [])

    if(!albums) {
        return (
            <div>En cours de chargement...</div>
        )
    } else {
        return (
            <ArtistDetailStyle>
                <LeftNavBar />
                <div className="artist_detail_container">
                    {
                        albums.map((album, index) => {
                            return (
                                <AlbumsCard
                                key={index}
                                img={album.images[1].url}
                                alt={album.name}
                                name={album.name}
                                release_date={album.release_date}
                                total_tracks={album.total_tracks}
                                id={album.id}
                                />
                            )
                        })
                    }
                </div>
            </ArtistDetailStyle>
        )
    }
}
