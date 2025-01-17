import React from 'react';

import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Login () {
    const navigate = useNavigate();

    const register = () => navigate("/register")

    return <div>
            <Header enableLogin={false}></Header>
            <p>LOGIN</p>
            <Button color="inherit" onClick={register}>
                Register here
            </Button>
        </div>
}