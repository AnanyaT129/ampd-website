import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function About() {
    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        maxWidth: "50%",
        }),
      }));

    return (
        <Stack
            direction={{ sm: 'column', md: 'row' }}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ justifyContent: "space-evenly" }}
        >
            <Item>
                <img src="./images/electronics.png"></img>
            </Item>
            <Item>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1}}
                >
                    About the Project
                </Typography>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Item>
        </Stack>
    );
}