import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import Login from './Login';

const LeftNavBarStyle = styled.div`

    background-color: #332f2f;
    height: 100vh;
    width: 12%;
    position: fixed;

    .main_nav {
        width: 94%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
    }
    a {
        padding-top: 2rem;
        text-decoration: none;
        color: white;
        font-size: 20px;
        border-bottom: 1px solid grey;
        padding-bottom: 3rem;
        width: 87%;
        text-align: center;
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

