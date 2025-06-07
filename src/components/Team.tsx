import Typography from '@mui/material/Typography';
import React from 'react';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

enum Roles {Mechanical="Mechanical", Hardware="Hardware", Software="Software", Impedance="Impedance", Optics="Optics", Media="Media", Design="Design"}

type TeamMember = {
    name: string,
    image: string,
    linkedIn: string,
    roles: Roles[]
}

const team: TeamMember[] = [
    {
        name: "Justin Bahr",
        image: "./images/engineer.png",
        linkedIn: "https://www.linkedin.com/in/justin-bahr-b39732242/",
        roles: [Roles.Hardware, Roles.Impedance]
    },
    {
        name: "Carson Dang",
        image: "./images/engineer.png",
        linkedIn: "https://www.linkedin.com/in/carsondang/",
        roles: [Roles.Optics, Roles.Media]
    },
    {
        name: "Phi Hoang",
        image: "./images/engineer.png",
        linkedIn: "https://www.linkedin.com/in/phi-hoang-62970a248/",
        roles: [Roles.Mechanical, Roles.Design]
    },
    {
        name: "Hari Narayanam",
        image: "./images/engineer.png",
        linkedIn: "https://www.linkedin.com/in/hari-narayanam-48b46822a/",
        roles: [Roles.Hardware, Roles.Impedance]
    },
    {
        name: "Alexander Pervizi",
        image: "./images/engineer.png",
        linkedIn: "https://www.linkedin.com/in/apervizi/",
        roles: [Roles.Optics, Roles.Mechanical]
    },
    {
        name: "Ananya Tadigadapa",
        image: "./images/engineer.png",
        linkedIn: "https://www.linkedin.com/in/ananya-tadigadapa/",
        roles: [Roles.Software, Roles.Design]
    },
    {
        name: "Jonathan Qi",
        image: "./images/engineer.png",
        linkedIn: "https://www.linkedin.com/in/jonathan-qi-469223259/",
        roles: [Roles.Software]
    }
]

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

export default function Home () {
    const chunkArray = (array: TeamMember[], size: number) =>
        Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
            array.slice(i * size, i * size + size)
    );

    return <div>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1}}
        >
            The Team
        </Typography>
        <Stack spacing={4} sx={{ alignItems: 'center' }}>
            {chunkArray(team, 4).map((group, i) => (
                <Stack
                    key={i}
                    direction={{ sm: 'column', md: 'row' }}
                    sx={{
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '100%',
                        flexWrap: 'wrap',
                    }}
                    spacing={2}
                >
                    {group.map((member) => (
                        <Item>
                            <Stack direction='column' sx={{justifyContent: "space-evenly", alignItems: "Center"}}>
                                <Avatar alt={member.name} src={member.image} sx={{ width: 100, height: 100, alignSelf: "center"}}/>
                                <Typography variant='h6'>{member.name}</Typography>
                                <a href={member.linkedIn} target='_blank'><Typography variant='body1'>LinkedIn</Typography></a>
                                <Stack direction='row' sx={{justifyContent: "space-evenly", alignItems: "Center"}}>
                                    {member.roles.map((r) => (
                                        <Button variant='outlined'>{r.toString()}</Button>
                                    ))}
                                </Stack>
                            </Stack>
                        </Item>
                    ))}
                </Stack>
            ))}
        </Stack>
    </div>
}