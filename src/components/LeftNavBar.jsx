import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import Login from './Login';

const LeftNavBarStyle = styled.div`

    width: 12%;
    background-color: #332f2f;
    height: 100vh;

    .main_nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a {
        padding-top: 2rem;
        text-decoration: none;
        color: white;
    }
`;

export default function LeftNavBar() {
    return (
        <LeftNavBarStyle>
            <nav className="main_nav">
                <NavLink to="/"><AiOutlineHome /> Home</NavLink>
                <Login />
            </nav>
        </LeftNavBarStyle>
    )
}

