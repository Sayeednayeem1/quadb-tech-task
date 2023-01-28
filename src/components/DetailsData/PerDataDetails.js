import React from 'react';
import { useParams } from 'react-router-dom';

const PerDataDetails = () => {
    const {id} = useParams;
    console.log(id);
    return (
        <div>
            <h5>test</h5>
        </div>
    );
};

export default PerDataDetails;