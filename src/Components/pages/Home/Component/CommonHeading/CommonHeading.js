import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CommonHeading = ({ heading, index }) => {
    return (
        <Container data-aos="fade-up" sx={{ display: 'flex', py: 4, alignItems: 'center' }}>
            <h2 className=" mr-5 text-2xl md:text-4xl" style={{
                textTransform: ' capitalize'
            }}> {heading}</h2>
            <hr style={{ width: '30%', height: '1px' }} />
        </Container>
    );
};

export default CommonHeading;