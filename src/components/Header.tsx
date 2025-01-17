import React from 'react';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function Header(props: {enableLogin: boolean}) {
    const navigate = useNavigate();

    const login = () => navigate("/login")
    const home = () => navigate("/")
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" onClick={home}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        AMP'D
                    </Typography>
                </Button>
                {props.enableLogin ? 
                    <Button color="inherit" onClick={login}>
                        Login
                    </Button> :
                    null}
            </Toolbar>
        </AppBar>
    );
}