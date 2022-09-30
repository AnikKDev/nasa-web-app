import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='min-h-56 h-96 flex  justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default LoadingSpinner;