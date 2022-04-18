import { Box } from '@mui/system';
import React from 'react';

const CommonHeading = ({ heading, index }) => {
    return (
        <Box data-aos="fade-up" className=" container d-flex align-items-center">
            <h2 className=" me-5" style={{
                textTransform: ' capitalize'
            }}> {heading}</h2>
            <hr style={{ width: '30%', height: '1px' }} />
        </Box>
    );
};

export default CommonHeading;