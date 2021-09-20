import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';

const LeftNavBarStyle = styled.div`
    width: 12%;
    height: 100vh;
    float: left;
    background-color: #332f2f;
    .main_nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
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
            </nav>
        </LeftNavBarStyle>
    )
}

