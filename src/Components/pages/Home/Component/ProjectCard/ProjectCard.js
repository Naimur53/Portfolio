
import { Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IosShareIcon from '@mui/icons-material/IosShare';
import './Project-img.css'
const ProjectCard = ({ index, code_link, img, live_link, name, project_type, title, _id, technology }) => {
    const position = index % 2 === 0 ? true : false;
    const handleImgLoad = () => {
        console.log(index, 'loding doen');
    }
    return (
        <Grid item data-aos="fade-up" container spacing={0} sx={{
            mb: { xs: 0, }, flexDirection: position ? 'row' : 'row-reverse'
        }} >
            <Grid item md={7} xs={12} sx={{ width: '100%' }}>
                <Box
                    className='project-img'
                    onLoad={handleImgLoad}
                    sx={{ width: '100%', backgroundImage: `url(${img})`, height: '360px', }}

                >
                </Box>
            </Grid>
            <Grid item md={5} xs={12}>
                <Box
                    sx={{ textAlign: { xs: 'left', md: position ? 'right' : 'left' }, ml: { xs: 0, md: position ? -10 : 0 }, mr: { xs: 0, md: position ? 0 : -10 }, position: 'relative', zIndex: 1, mt: { xs: 3, md: 0 } }}
                >
                    <Typography variant='span' textTransform='capitalize' gutterBottom fontSize='13px' color='#11d3ff' fontFamily='Roboto Mono' className={`${project_type === 'team' && 'title fw-bold fs-6'}`} >{project_type} project</Typography>

                    <Typography variant='h4' gutterBottom>{name}</Typography>

                    <Box sx={{
                        px: 2, py: 3, background: '#00000080', color: 'white', boxShadow: ' 0 20px 31px -15px #80808075'
                    }} className='rounded-3'>
                        <Typography variant='body1' color='#ffffffb5' >{title}</Typography>

                    </Box>
                    <Box sx={{ my: 2 }}>
                        {
                            technology?.map(single => <Typography variant='span ' color='#ffffffb5' sx={{ mx: 1, display: 'inline-block' }} fontFamily='Roboto Mono'>{single}</Typography>)
                        }
                    </Box>
                    <Box>
                        <IconButton href={code_link}>
                            <GitHubIcon></GitHubIcon>
                        </IconButton>
                        <IconButton href={live_link}>
                            <IosShareIcon></IosShareIcon>
                        </IconButton>

                    </Box>
                </Box>
            </Grid>
        </Grid >
    );
};

export default ProjectCard;