import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import DataDetail from './DataDetail';
import DetailsModal from './DetailsModal';

const DetailsData = () => {
    const [details, setDetails] = useState([]);

    // todo state to show data in Booking Modal

    const [modalData, setModalData] = useState(null);

    // todo fetch data from the api

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])


    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-2xl font-bold mt-12 mb-8'>All Series List</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    details.map((detail, x) => <DataDetail
                        key={x}
                        detail={detail}
                        setModalData={setModalData}
                    >
                    </DataDetail>)
                }
            </div>
            <div>
                {modalData &&
                    <Booking
                        modalData={modalData}
                    ></Booking>}
            </div>
            <div>
                {modalData &&
                    <DetailsModal
                        modalData={modalData}
                    ></DetailsModal>
                }
            </div>
        </div>
    );
};

export default DetailsData;