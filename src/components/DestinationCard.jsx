import Image from 'next/image';
import { LuMapPin } from "react-icons/lu";
import React from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { Button } from '@heroui/react';
import Link from 'next/link';

const DestinationCard = ({destination}) => {

    const {destinationName, _id, country , price ,  duration , imageUrl , description} = destination;

    return (
       
       
       <div className='border p-5'>

            <div>
                <Image src={imageUrl} 
            alt={destinationName}
            width={400}
            height={400}
            
            >

            </Image>
            </div>

            <div className='space-y-3'>
                
                <div className='flex gap-1 items-center mt-2'>
                <LuMapPin /> {country}
                </div>

                <div className='flex gap-8 font-bold'>
                    <h2>{destinationName}</h2>
                    <div>${price}</div>
                </div>

                <div className='flex gap-2 items-center'>
                    <IoCalendarNumberOutline />
                    {duration}
                </div>

               <Link href={`/destinations/${_id}`}> <Button>
                    Book now
                </Button></Link>
            </div>
            
        </div>
    );
};

export default DestinationCard;