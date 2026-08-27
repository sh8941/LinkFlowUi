import React from 'react';

const ErrorState = ({message}) => {
    return (
        <div className='w-full h-full text-2xl'>
            {message}
            error to loading...
        </div>
    );
}

export default ErrorState;
