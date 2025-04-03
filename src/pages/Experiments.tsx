import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Box from '@mui/material/Box';

import data1 from '../demoData2.json';
import data2 from '../demoData3.json';
import data3 from '../demoData4.json';
import { ExperimentData, UserExperiments } from '../models/experiment';
import { ExperimentsViewer } from '../components/ExperimentsViewer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase';

export default function Experiments () {
    const navigate = useNavigate();

    const [experiments, setExperiments] = useState<UserExperiments | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    // const experiment1 = data1 as unknown as ExperimentData
    // const experiment2 = data2 as unknown as ExperimentData
    // const experiment3 = data3 as unknown as ExperimentData
    
    // const experiments: UserExperiments = {
    //     collection_name: "User 1",
    //     documents: [experiment3, experiment2, experiment1]
    // }

    useEffect(() => {
        const fetchUserData = async () => {
            // Check if the user is authenticated
            onAuthStateChanged(auth, async (user) => {
                if (!user) {
                    // User is not logged in
                    setLoading(false);
                    return;
                }

                try {
                    // Get the UID of the logged-in user
                    const uid = user.uid;
                    console.log(uid)

                    // Query Firestore to fetch the experiments related to this user
                    const experimentsRef = collection(db, uid);
                    const q = query(experimentsRef);
                    const querySnapshot = await getDocs(q);

                    if (querySnapshot.empty) {
                        console.log('No experiments found for this user.');
                        setExperiments(null);
                    } else {
                        const experimentsData: ExperimentData[] = [];
                        querySnapshot.forEach((doc) => {
                            const data = doc.data() as ExperimentData; // Cast to the ExperimentData type
                            experimentsData.push(data);
                        });

                        experimentsData.reverse()

                        // Set the experiments data to the state
                        setExperiments({
                            collection_name: `User ${uid}`,
                            documents: experimentsData,
                        });
                    }
                } catch (error) {
                    console.error('Error fetching experiments:', error);
                    setExperiments(null);
                }
                setLoading(false); // Stop loading
            });
        };

        fetchUserData();
    }, [auth, db]);

    if (localStorage.getItem('authToken') === null) {
        return <div>
            <Header enableLogin={true}></Header>
            <Container>
                <Typography>
                    Please <Button onClick={() => navigate("/login")}>Log in</Button> or <Button onClick={() => navigate("/register")}>Register</Button>
                </Typography>
            </Container>
        </div>
    }

    return <div>
            <Header enableLogin={true}></Header>
            <Box component="section" sx={{padding: "5%"}}>
                {experiments ? <ExperimentsViewer experiments={experiments}></ExperimentsViewer> : <Typography>Unable to fetch data</Typography>}
            </Box>
        </div>
}