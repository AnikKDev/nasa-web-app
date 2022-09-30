import React, { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import CalamityCard from './CalamityCard';

const Events = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [events, setEvents] = useState([])
    useEffect(() => {
        setIsLoading(true)
        fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setEvents(data.events);
                setIsLoading(false)
            })
    }, []);

    if (isLoading) {
        return <LoadingSpinner />
    }
    // console.log(events.slice(0, 10))
    return (
        <div className=''>
            <h1 className='text-3xl text-bold text-center font-sans'>
                Recently Occured Calamities
            </h1>
            <div className='grid my-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-16 gap-7'>
                {
                    events.slice(0, 20).map(data => (
                        <CalamityCard data={data} />
                    ))
                }
            </div>
        </div>
    );
};

export default Events;