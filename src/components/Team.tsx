import Typography from '@mui/material/Typography';
import React from 'react';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function Home () {
    return <div>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1}}
        >
            The Team
        </Typography>
        <Stack direction={{ sm: 'column', md: 'row' }} sx={{justifyContent: "space-evenly", alignItems: "Center"}}>
            <Avatar alt="Remy Sharp" src="./images/engineer.png" sx={{ width: 100, height: 100, alignSelf: "center"}}/>
            <Avatar alt="Travis Howard" src="./images/engineer.png" sx={{ width: 100, height: 100, alignSelf: "center"}}/>
            <Avatar alt="Cindy Baker" src="./images/engineer.png" sx={{ width: 100, height: 100, alignSelf: "center"}}/>
            <Avatar alt="John Doe" src="./images/engineer.png" sx={{ width: 100, height: 100, alignSelf: "center"}}/>
            <Avatar alt="Remy Sharp" src="./images/engineer.png" sx={{ width: 100, height: 100, alignSelf: "center"}}/>
            <Avatar alt="Travis Howard" src="./images/engineer.png" sx={{ width: 100, height: 100, alignSelf: "center"}}/>
            <Avatar alt="Cindy Baker" src="./images/engineer.png" sx={{ width: 100, height: 100, alignSelf: "center"}}/>
        </Stack>
    </div>
}