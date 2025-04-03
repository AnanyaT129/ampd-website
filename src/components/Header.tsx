import React from 'react';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Header(props: {enableLogin: boolean}) {
    const navigate = useNavigate();

    const login = () => navigate("/login")
    const home = () => navigate("/")
    
    const logout = () => {
        localStorage.removeItem('authToken')
        home()
    }

    const authToken = localStorage.getItem('authToken')
    const logButton = authToken ? 
        (<Button color="inherit" onClick={logout}>
            Logout
        </Button>) :
        (<Button color="inherit" onClick={login}>
            Login
        </Button>)
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={home} sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            AMP'D
                        </Typography>
                    </Button>
                    {props.enableLogin ? logButton : null}
                </Toolbar>
            </AppBar>
        </Box>
    );
}