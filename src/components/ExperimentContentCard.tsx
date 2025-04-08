import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ExperimentData } from '../models/experiment';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
    flexGrow: 1,
}));

export default function ExperimentContentCard(props: {doc: ExperimentData, col: boolean}) {
    const safetyLabel = (plasticPresent: string) => {
        if (plasticPresent === "True") {
            return (<Typography sx={{ color: 'red', mb: 1.5 }}>Plastic Present</Typography>);
        } else if (plasticPresent === "False") {
            return (<Typography sx={{ color: 'green', mb: 1.5 }}>Plastic Not Present</Typography>);
        } else {
            return (<Typography sx={{ color: 'brown', mb: 1.5 }}>Uncertain Results</Typography>);
        }
    }

    const df = props.doc.impedanceData.low.length + props.doc.impedanceData.high.length - 2

  return (
    <Card>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Microplastic Content
            </Typography>
            <Stack direction={props.col ? 'column' : "row"} divider={<Divider orientation={props.col ? 'horizontal' : "vertical"} flexItem />} useFlexGap>
                <Item>
                    <Typography variant="caption" component="div">
                        "Impedance Analysis Results"
                    </Typography>
                    {safetyLabel(props.doc.impedanceAnalysis.analysisResults.plasticPresent)}
                    <Typography variant="body1" component="div">
                        Estimated Plastic Content: {props.doc.impedanceAnalysis.analysisResults.estPlasticContent}
                    </Typography>
                </Item>
                <Item>
                    <Typography variant="caption" component="div">
                        "Camera Analysis Results"
                    </Typography>
                    {safetyLabel(props.doc.cameraAnalysis[0]?.analysisResults?.plasticPresent ?? "")}
                    <Typography variant="body1" component="div">
                        Estimated Plastic Content: {props.doc.cameraAnalysis[0]?.analysisResults?.estPlasticContent ?? ""}
                    </Typography>
                </Item>
            </Stack>
        </CardContent>
        {!props.col ? (
            <CardActions>
                <Button size="small">See More</Button>
            </CardActions>
        ) : null}
    </Card>
  );
}
