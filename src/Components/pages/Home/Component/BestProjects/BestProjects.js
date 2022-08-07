import { Container, Grid, Skeleton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../../../../MangeState/dataSlice';
import ProjectCard from '../ProjectCard/ProjectCard';

const BestProjects = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(3);
    const [loading, setLoading] = useState(true);
    const { windowLoad } = useSelector(allData)

    useEffect(() => {
        axios.get('https://glacial-stream-21604.herokuapp.com/bestprojects').then(res => {
            setData(res.data);
            setLoading(false);
        })
    }, [])
    return (
        <Container className="pt-5  ">
            <div className="bol-3 bol"></div>

            <Grid container spacing={15}>

                {
                    !windowLoad || !loading ? data.slice(0, show).map((single, index) => <ProjectCard {...single} key={single._id} index={index}></ProjectCard>) : <Grid item data-aos="fade-up" container spacing={0} sx={{
                        mb: { xs: 0, }, flexDirection: 'row'
                    }} >
                        <Grid item md={7} xs={12} sx={{ width: '100%' }}>
                            <Box
                                className='project-img'

                            >
                                <Skeleton variant="rectangular" width='100%' height={360} />
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Box
                                sx={{ textAlign: { md: 'right' }, ml: { xs: 0, md: -10 }, mr: { xs: 0, md: -10 }, position: 'relative', zIndex: 1, mt: { xs: 3, md: 0 } }}
                            >
                                <Box sx={{ my: 2, display: 'flex', flexDirection: "column", alignItems: 'flex-end' }}>
                                    <Skeleton variant="rectangular" sx={{ mb: 2, backgroundColor: 'black' }} width={100} height={20} />
                                    <Skeleton variant="rectangular" sx={{ mb: 2, backgroundColor: 'black' }} width={320} height={20} />
                                </Box>


                                <Box sx={{
                                    px: 2, py: 10, background: '#00000080', color: 'white', boxShadow: ' 0 20px 31px -15px #80808075'
                                }} className='rounded-3'>

                                </Box>
                                <Box sx={{ my: 2, display: 'flex', flexDirection: "column", alignItems: 'flex-end' }}>
                                    <Skeleton variant="rectangular" sx={{ mb: 2, backgroundColor: 'black' }} width='100%' height={20} />
                                    <Skeleton variant="rectangular" sx={{ mb: 2, backgroundColor: 'black' }} width={210} height={20} />
                                </Box>
                                <Box>


                                </Box>
                            </Box>
                        </Grid>
                    </Grid >
                }
            </Grid>
            <Stack justifyContent='center' alignItems='center' className=' py-5'>

                {
                    data.length >= show + 2 && <button className='resume my-5' onClick={() => setShow(show + 3)}>Show more</button>
                }
            </Stack>


        </Container >
    );
};

export default BestProjects;