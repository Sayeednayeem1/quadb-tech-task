import React, { useEffect, useState } from 'react';
import DataDetail from './DataDetail';

const DetailsData = () => {
    const [details, setDetails] = useState([]);

    // todo fetch data from the api

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])


    return (
        <div>
            {
                details.map((detail, x) => <DataDetail
                    key={x}
                    detail={detail}
                ></DataDetail>)
            }
        </div>
    );
};

export default DetailsData;