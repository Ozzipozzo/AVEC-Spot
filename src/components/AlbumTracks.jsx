import React, { useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Gradient from '../assets/img/background-gradient.jpg';

const TracksDetailStyle = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 2rem;
    background-color: #1B1919;

    .main_banner {
        z-index:0;
        height: 325px;
    }
    .gradient_banner {
        width: 1700px;
        height: 300px;
    }

    .main_tracks {
        width: 100%;
    }

    .artist_title {
        left: 39px;
        position: relative;
        top: -350px;
        font-size: 150px;
    }

`;


export default function AlbumTracks() {

    const tokentest = useCookies()[0].token;
    let { id } = useParams();
    const [tracks, setTracks] = useState(null);
    // const [ play, setPlay ] = useState(false)
    // const format = 'mp3';
    // const html5 = true

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokentest
            }
        })
        .then(res => res.json())
        .then(res => {
            setTracks(res.items)
        })
    }, [])

    if(!tracks) {
        return (
            <div> En cours de chargement ...</div>
        )
    } else {
        return (
            <TracksDetailStyle>
            <div className="main_banner">
                <img className="gradient_banner" src={Gradient} alt="" />
                <h2 className="artist_title">{tracks[0].artists[0].name}</h2>
            </div>
            {tracks.map((track, index) => {
                return (
                   <div className="main_tracks" key={index}>
                       <ul>
                           <li>{track.name}</li>
                           <audio src={track.preview_url} controls></audio>
                            {/* <ReactHowler
                               src={[track.preview_url]}
                               playing={false}
                               format={[format]}
                               html5={html5}
                            /> */}
                       </ul>
                   </div>
                )
            })}
            </TracksDetailStyle>
        )
    }
}
