import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ExperimentData } from '../models/experiment';

export default function ExperimentContentCard(props: {doc: ExperimentData}) {
    const safetyLabel = (mpContent: number) => {
        if (mpContent > 100) {
            return (<Typography sx={{ color: 'red', mb: 1.5 }}>Unsafe to drink</Typography>);
        } else if (mpContent > 50) {
            return (<Typography sx={{ color: 'brown', mb: 1.5 }}>Okay to drink</Typography>);
        } else {
            return (<Typography sx={{ color: 'green', mb: 1.5 }}>Safe to drink</Typography>);
        }
    }

  return (
    <Card>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Microplastic Content
            </Typography>
            <Typography variant="h5" component="div">
                {props.doc.microplastic_content}
            </Typography>
            {safetyLabel(props.doc.microplastic_content)}
        </CardContent>
        <CardActions>
            <Button size="small">See More</Button>
        </CardActions>
    </Card>
  );
}
