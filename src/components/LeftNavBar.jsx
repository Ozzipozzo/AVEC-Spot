import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: column;
    width: 20%;
    height: 100vh;
`;

export default function LeftNavBar() {
    return (
        <Container>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/artists">Artists</NavLink>
        </Container>
    )
}

