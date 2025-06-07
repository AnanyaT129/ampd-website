import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
    maxWidth: "50%",
}));

export default function Materials() {
    const handleClick = (url: string) => {
        window.open(url, '_blank'); // Opens in a new tab
    };

    return (
        <div style={{marginBottom: '3%'}}>
            <Typography variant='h6'>Project Output & Final Materials</Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{ justifyContent: "space-evenly" }}
            >
                <Item><Button variant='contained' onClick={() => handleClick('finalPres.pdf')}>Final Presentation</Button></Item>
                <Item><Button variant='contained' onClick={() => handleClick('finalReport.pdf')}>Final Report</Button></Item>
                <Item><Button variant='contained' onClick={() => handleClick('https://github.com/AnanyaT129/ampd-gui')}>Source Code</Button></Item>
                <Item><Button variant='contained' onClick={() => handleClick('https://drive.google.com/file/d/1WIfl4qWRMdGn5Z5lBkd2YaDDTwRzsdl4/view?usp=sharing')}>Trailer</Button></Item>
            </Stack>
        </div>
    )
}