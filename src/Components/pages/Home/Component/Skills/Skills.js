import { Grid } from '@mui/material';
import React from 'react';
import CustomCircular from '../CustomCircular/CustomCircular';

const Skills = () => {
    return (
        <Grid container spacing={5} >
            <Grid item xs={3}>

                <CustomCircular value={82} text='HTML/Css'></CustomCircular>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={96} text='Tailwind' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={89} text='MaterialUi' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={91} text='Bootstrap' half={true}></CustomCircular>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <CustomCircular text='Javascript' value={89}></CustomCircular>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={90} text='Es6' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={89} text='Dom' half={true}></CustomCircular>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <CustomCircular text='React' value={90}></CustomCircular>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={59} text='Firebase' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={96} text='Redux Toolkit' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={91} text='Context Api' half={true}></CustomCircular>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={91} text='Npm package' half={true}></CustomCircular>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <CustomCircular text='Node js' value={63}></CustomCircular>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={69} text='Express' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={78} text='Socket io' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={87} text='MongoDB' half={true}></CustomCircular>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Skills;