import React from 'react';

const DataDetail = ({ detail, setModalData }) => {
    const { image, name } = detail.show;
    console.log(detail.show);
    return (
        <div>
            <div className="card card-compact shadow-xl">
                <figure><img src={image?.medium} alt="blank" className='rounded'/></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Series Name</span>: <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{name}</span></h2>
            
                    <div className="card-actions justify-start">
                        <label  htmlFor="details-modal"
                            className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none"
                            onClick={() => setModalData(detail)}
                        >Details</label>
                        <label htmlFor="booking-modal"
                            className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none"
                            onClick={() => setModalData(detail)}
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDetail;