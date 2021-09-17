import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LeftNavBarStyle = styled.div`
    width: 10%;
    height: 100vh;
    float: left;
    .main_nav {
        display: flex;
        flex-direction: column;
    }
`;

export default function LeftNavBar() {
    return (
        <LeftNavBarStyle>
            <nav className="main_nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/artists">Artists</NavLink>
            </nav>
        </LeftNavBarStyle>
    )
}

