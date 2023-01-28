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
                    <h3 className="text-2xl font-bold text-orange-600">Name: {name}</h3>
                    <h3 className="text-2xl font-bold text-orange-600">Genres: {genres}</h3>
                    <h3 className="font-bold text-orange-600">Language: {language}</h3>
                    <p className="py-4">Details: {summary}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;