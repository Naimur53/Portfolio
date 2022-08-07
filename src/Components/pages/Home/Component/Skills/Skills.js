import { Grid } from '@mui/material';
import React from 'react';
import CustomCircular from '../CustomCircular/CustomCircular';

const Skills = () => {
    return (
        <Grid container spacing={4} >
            <Grid item xs={3}>

                <CustomCircular value={82} text='HTML/Css'></CustomCircular>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={96} text='Tail wind' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={89} text='Material Ui' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={91} text='Boot strap' half={true}></CustomCircular>
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
                        <CustomCircular value={72} text='Type script' half={true}></CustomCircular>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <CustomCircular text='React' value={90}></CustomCircular>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={91} text='Next js' half={true}></CustomCircular>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={59} text='Fire base' half={true}></CustomCircular>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CustomCircular value={96} text='Redux Toolkit' half={true}></CustomCircular>

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