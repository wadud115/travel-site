'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookCard = ({destination}) => {
  // console.log(destination)


  const {price, _id ,imageUrl, destinationName, description, country } = destination;

  const handleBooking = async ()=>{

    const bookingData = {
      userId  : user.id,

      imageUrl : user.image,
      userName : user.name,

      destinationId : _id,
      price,
       _id ,
      imageUrl,
      destinationName,
      description,
      country,
      date : new Date(date)

    }

   const res = await fetch("http://localhost:5000/booking", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(bookingData)
});

const data = await res.json();

toast.success('you booked successFully')
   

    // console.log(bookCard)
    
  }

     const { 
          data: session, 
      } = authClient.useSession() 
  
      // console.log(session)
  
      const user = session?.user;
  
      // console.log(user)

  const [date, setDate] = useState(null);

  console.log(new Date(date))

    
    
    
    
    return (
        <Card className='rounded-none mt-5'>

          <p className='text-muted text-sm '> Starting from </p>
          <p className='text-3xl font-bold text-cyan-500'>${price}</p>
          <p className='text-muted text-sm '>per person</p>

          <DateField onChange={setDate} className="w-[256px]" name="date">
      <Label>Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
          <Button onClick={handleBooking} className={'bg-cyan-500 w-full rounded-none'}>Book Now</Button>

            
        </Card>
    );
};

export default BookCard;