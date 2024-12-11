import React from 'react';

const NoteFound = () => {
    return (
        <div className='flex items-center justify-center h-screen gap-10'>
            <h1 className='text-5xl  text-red-500  '>404</h1>
            <span> <a className='text-green-500' href='/'>Back</a></span>
           
        </div>
    );
};

export default NoteFound;