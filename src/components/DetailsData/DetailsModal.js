import React from 'react';

const DetailsModal = ({ modalData }) => {
    const { name, image, schedule, summary, language, genres } = modalData.show;
    return (
        <div>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img className='mx-auto rounded' src={image?.medium} alt="" />
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Name: {name}</h3>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Genres: {genres}</h3>
                    <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Language: {language}</h3>
                    <p className="py-4"><span className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Details</span>: {summary.slice(3, -4)}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;