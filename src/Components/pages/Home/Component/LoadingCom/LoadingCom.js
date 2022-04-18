import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../../../../MangeState/dataSlice';

const LoadingCom = () => {
    const { windowLoad } = useSelector(allData)
    return (
        <div style={{ transition: 'all .3s' }} className={`vh-100  justify-content-center align-items-center w-100 ${windowLoad ? '' : 'preloader_animation '}`} id='preloader'>
            <p className="text-center">Naimur is thinking</p>
        </div>
    );
};

export default LoadingCom;