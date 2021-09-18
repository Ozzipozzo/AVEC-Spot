import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ArtistsCardStyle = styled.div`

    margin-top: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 2rem;
    .artist_card_main {
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
        display: inline-block;
        img {
            width: 320px;
            height: 320px;
            border-radius: 10px;
        }
    }
`;
export default function AlbumsCard(props) {
    let history = useHistory();

    const handleId = (id) => {
        history.push(`/album_detail/${id}`)
    }
    return (
        <ArtistsCardStyle>
            <div className="album_card_main">
                <Link to="#" onClick={() => handleId(props.id)}>
                    <img src={props.img} alt={props.name} />
                    <p>{props.name}</p>
                    <p>{props.release_date}</p>
                    <p>{props.total_tracks}</p>
                </Link>
            </div>
        </ArtistsCardStyle>
    )
}
