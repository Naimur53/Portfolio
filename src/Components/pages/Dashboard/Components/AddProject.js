import React from 'react';
import axios from 'axios';

import { Button, Grid, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import ProjectCard from '../../Home/Component/ProjectCard/ProjectCard';
const AddProject = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.technology = data.technology.split(',')
        axios.post(`http://localhost:5000/bestprojects`, data)
        reset();
        alert('Added success full ');

    };
    let data = {
        name: watch('name'),
        title: watch('title'),
        img: watch('img'),
        live_link: watch('live_link'),
        code_link: watch('code_link'),
        project_type: watch('project_type'),
        technology: watch('technology')?.split(','),
        index: 0
    }
    return (
        <Grid container >

            <Grid item xs={12}>
                <Box style={{ background: 'white' }} >
                    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                        <TextField color="warning" label="Name" sx={{ mb: 1 }} variant="standard" placeholder='Name'  {...register("name", { required: true })} />

                        <TextField color="warning" label="Title" sx={{ mb: 1 }} variant="standard" placeholder='Title' {...register("title", { required: true })} />


                        <TextField color="warning" label="Img Link" sx={{ mb: 1 }} variant="standard" placeholder='Img Link' {...register("img", { required: true })} />


                        <TextField color="warning" label="Live link" sx={{ mb: 1 }} variant="standard" placeholder='live  Link'  {...register("live_link", { required: true })} />


                        <TextField color="warning" label="code link" sx={{ mb: 1 }} variant="standard" placeholder='code Link' {...register("code_link", { required: true })} />

                        <TextField color="warning" label="project type" sx={{ mb: 1 }} variant="standard" placeholder='project type' {...register("project_type", { required: true })} />

                        <TextField color="warning" label="Technology" sx={{ mb: 1 }} variant="standard" placeholder='project type' {...register("technology", { required: true })} />


                        <input type="submit" className='btn btn-success' value='add' />
                    </form>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <ProjectCard {...data}></ProjectCard>

            </Grid>

        </Grid>
    );
};

export default AddProject;