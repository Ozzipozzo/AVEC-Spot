import React from 'react'
import styled from 'styled-components';

const ArtistsCardStyle = styled.div`

    margin-top: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 22%;
    justify-content: space-between;
    margin-right: 2rem;
    .artist_card_main {
        width: 100%;
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
        img {
            width: 300px;
            height: 200px;
        }
    }
`;

export default function Artists() {
    return (
        <ArtistsCardStyle>
            <div className="artist_card_main">
                <h1>hello</h1>
            </div>
        </ArtistsCardStyle>
    )
}
