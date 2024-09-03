import React, { useState, useEffect } from 'react';

export const Card = ({data,property,text}) => {


  return (
    <div className=' bg-gray-400 p-4 flex flex-col gap-[2rem] w-[20rem] justify-center items-center h-[10rem] '>
      <h2 className='text-2xl'>{text}</h2>
      <h3 className='text-2xl' >{data ? data[property] : 'Loading...'}</h3>
    </div>
  );
};