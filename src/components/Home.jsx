import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const HomeStyle = styled.div`

`;
export default function Home() {
    return (
        <HomeStyle>
            <Login/>
            <h1>welcome to lol</h1>
        </HomeStyle>
    )
}