import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BestCard from '../../Home/Component/BestProjects/BestCard';

const UpBestProject = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://glacial-stream-21604.herokuapp.com/bestprojects')
            .then(res => setData(res.data))
    }, [])
    return (
        <div>
            <div className="row">
                {
                    data.map(singleData => <BestCard {...singleData} admin></BestCard>)
                }
            </div>
        </div>
    );
};

export default UpBestProject;