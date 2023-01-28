import React from 'react';

const DataDetail = ({ detail, setModalData }) => {
    const { image, name, id } = detail.show;
    console.log(detail.show);
    return (
        <div>
            <div className="card card-compact shadow-xl">
                <figure><img src={image?.medium} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Series Name: <span className='text-orange-600'>{name}</span></h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start">
                        <label htmlFor="details-modal"
                            className="btn"
                            onClick={() => setModalData(detail)}
                        >Details</label>
                        <label htmlFor="booking-modal"
                            className="btn"
                            onClick={() => setModalData(detail)}
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDetail;