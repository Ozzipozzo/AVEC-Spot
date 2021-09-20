import React, { useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router';
import styled from 'styled-components';
import ReactHowler from 'react-howler';

const TracksDetailStyle = styled.div`
    width: 100%;
`;


export default function AlbumTracks() {

    const tokentest = useCookies()[0].token;
    let { id } = useParams();
    const [tracks, setTracks] = useState(null)
    const [ play, setPlay ] = useState(false)
    const format = 'mp3';
    const html5 = true

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

   const test = () => {
       
   }
    
    console.log(tracks)

    if(!tracks) {
        return (
            <div> En cours de chargement ...</div>
        )
    } else {
        return (
            <TracksDetailStyle>
            {tracks.map((track, index) => {
                return (
                   <div key={index}>
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
