import React, { useEffect } from 'react';
import { useState } from 'react';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('https://images-assets.nasa.gov/video/GSFC_20170419_EarthFleet_m12586_2017/collection.json')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, []);

    console.log(gallery)
    return (
        <div className='mb-6'>
            <div className='w-3/4 mx-auto'>
                <video src={gallery[0]} controls></video>
            </div>
        </div>
    );
};

export default Gallery;