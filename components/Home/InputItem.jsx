"use client"

import Image from 'next/image'
import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const InputItem = ({type}) => {
  const [value, setValue] = useState(null);
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-3'>
        <Image src={type=='source' ? '/circle.png' : '/destination.png'} width={15} height={15} alt='source'/>
        {/* <input type="text" placeholder={type=='source' ? 'Pickup Location' : "Drop off Location"} className='bg-transparent w-full outline-none'/> */}
        <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
        }}/>
    </div>
  )
}

export default InputItem