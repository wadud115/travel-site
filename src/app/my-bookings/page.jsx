import { auth } from '@/lib/auth';
import { TrashBin } from '@gravity-ui/icons';
import { Button, Calendar } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { BiMapPin } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';

const MyBookingPage = async() => {

    const session = await auth.api.getSession({
    headers: await headers() 

    
})

// console.log(session)

const user = session?.user

// console.log(user)

    const res = await fetch(`http://localhost:5000/booking/${user.id}`)

    const bookings = await res.json()

    // console.log(bookings)
    
    return (
        <div className='max-w-7xl mx-auto my-10 '>
            <h1 className='text-2xl font-bold mb-2'>My booking Page</h1>
            <p className='mb-5'>Manage and view your upcoming travel plans</p>

            <div className='space-y-4'>{
                bookings.map( booking => <div className='flex gap-10  border min-w-3xl p-5 '  key={booking._id}>

                    <Image src={booking.imageUrl}
                    alt={booking.destinationName}
                    width={200}
                    height={200}
                    
                    >

                    </Image>


                    <div className='space-y-3'>

                        <h2 className='font-bold text-2xl'>{booking.destinationName}</h2>
                        <p className='flex items-center gap-2'><SlCalender></SlCalender> Depature Date : {booking.date} </p>
                        <p className='flex items-center gap-2'> <BiMapPin></BiMapPin> Booking Id : {booking._id}</p>

                        <div className='flex justify-between'>
                            <p className='font-bold text-xl text-cyan-400'>Price : ${booking.price}</p>
                            <Button variant='outline' className={'rounded-none text-red-500 border-red-500'} ><TrashBin></TrashBin>Cancel</Button>
                        </div>
                    </div>



                </div>)

                }
            </div>


            
        </div>
    );
};

export default MyBookingPage;