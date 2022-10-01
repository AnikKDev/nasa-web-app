import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CalamityCard = ({ data }) => {
    console.log(data)
    console.log(data.geometries);
    const navigate = useNavigate();
    return (
        <div
            data-aos="zoom-in"
            className="card bg-gray-700 text-white w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><span>{data.title}</span></h2>
                <h5>Category: <span className='font-mono underline'>{data.categories[0].title}</span></h5>
                <h5>Coordinates: {data.geometries[0].coordinates[0] + ", " + data.geometries[0].coordinates[1]}</h5>

                {/* geometry */}
                <button onClick={() => navigate(`/coordinate/${data.id}`)} className='btn btn-sm'>See Geometry</button>
                <h5 className=''><a target="_blank" href={data.sources[0].url} className="btn btn-sm bg-slate-800 text-white mt-8">Affected areas</a></h5>
            </div>
        </div>
    );
};

export default CalamityCard;