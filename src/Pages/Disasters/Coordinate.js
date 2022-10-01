import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationInMap from './LocationInMap';

const Coordinate = () => {
    const { id } = useParams();
    const [coOrdinate, setCoordinate] = useState([]);
    useEffect(() => {
        fetch(`https://eonet.gsfc.nasa.gov/api/v2.1/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setCoordinate(data);
            })
    }, [id])
    return (
        <div>
            {/* geometry */}
            {
                coOrdinate.geometries?.map(item => (
                    <LocationInMap item={item} />
                ))
            }
        </div>
    );
};

export default Coordinate;