import Image from 'next/image';
import { LuMapPin } from "react-icons/lu";
import React from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import { EditModel } from '@/components/EditModal';
import { DeleteAlertPage } from '@/components/DeleteAlert';
import BookCard from '@/components/BookCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


const DestinationDetailsPage = async({params}) => {

    const {id} = await params;

    const {token} = await auth.api.getToken({
        headers : await headers()
    })

    console.log(token)



    const res = await fetch(`http://localhost:5000/destination/${id}` , {
        headers : {
            authorization : `Bearer ${token}`
        }
    })
    const destination = await res.json()
    // console.log(destination)
     const {destinationName, country , price ,  duration , imageUrl , description} = destination;
    // console.log(id)

    return (
        <div className='max-w-7xl mx-auto'>

            <h1 className='font-bold text-2xl my-3 text-center'>DestinationDetailsPage</h1>

            <div className=' card p-10 m-10'>

<div className='flex justify-end gap-3 items-center'>
    
                <EditModel destination={destination}></EditModel>
                <DeleteAlertPage destination={destination}></DeleteAlertPage>
</div>

               

            <div>
                <Image src={imageUrl} 
            alt={destinationName}
            width={500}
            height={800}
            
            >

            </Image>
            </div>

            <div className='flex justify-between gap-5'>
                <div className='space-y-3'>
                
                <div className='flex gap-1 items-center mt-2'>
                <LuMapPin /> {country}
                </div>

                <div className='flex gap-8 font-bold'>
                    <h2>{destinationName}</h2>
                    
                </div>

                <div className='flex gap-2 items-center'>
                    <IoCalendarNumberOutline />
                    {duration}
                </div>

            </div>

            <BookCard destination={destination}></BookCard>
            
            </div>

        </div>
            
        </div>
    );
};

export default DestinationDetailsPage;