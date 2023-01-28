import React from 'react';
import { Link } from 'react-router-dom';

const DataDetail = ({ detail, details, setDetails }) => {
    const { image, name, id } = detail.show;
    console.log(detail.show.genres);
    return (
        <div>
            <div className="card card-compact shadow-xl">
                <figure><img src={image?.medium} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Series Name: <span className='text-orange-600'>{name}</span></h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">
                            <Link to={`/details/${detail.show.id}`}
                                detail={detail}
                            >Details</Link>
                        </button>
                        <label htmlFor="booking-modal" className="btn">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDetail;