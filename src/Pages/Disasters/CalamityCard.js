import React from 'react';

const CalamityCard = ({ data }) => {
    console.log(data)
    return (
        <div
            data-aos="zoom-in"
            className="card bg-gray-700 text-white w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><span>{data.title}</span></h2>
                <h5>Category: <span className='font-mono underline'>{data.categories[0].title}</span></h5>
                <h5 className=''><a target="_blank" href={data.sources[0].url} className="btn btn-sm bg-slate-800 text-white mt-8">Affected areas</a></h5>
            </div>
        </div>
    );
};

export default CalamityCard;