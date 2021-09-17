import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginStyle = styled.div`
    $green: #359b7a;
    $gray: #bbbbbb;

    display: flex;
    justify-content: flex-end;
    width: 80%;

    .login_button {
        outline:none;
        height: 40px;
        text-align: center;
        width: 130px;
        border-radius:40px;
        background: #fff;
        border: 2px solid $green;
        color:black;
        letter-spacing:1px;
        text-shadow:0;
        cursor: pointer;
        transition: all 0.25s ease;
        font-size: 15px;
        &:hover {
        color:green;
        background: $green;
        }
    }
`;

export default function Login() {

    return (
        <LoginStyle>
            <div className="main_login">
                <Link to="/login">Se connecter</Link>
            </div>
        </LoginStyle>
    )
}
