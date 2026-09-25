"use client"

import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nabver = () => {

    const { 
        data: session, 
    } = authClient.useSession() 

    // console.log(session)

    const user = session?.user;

    console.log(user)

    const handleSignOut = async()=>{
        await authClient.signOut();
    }


    return (
        <nav className='flex items-center justify-between p-5 shadow-xs'>
            <ul className='flex gap-3'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destination</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                <li><Link href={'/add-destination'}>Add destination</Link></li>
            </ul>


            <div>
                <Image src={'/assets/Wanderlast.png'}
                width={150}
                height={150}
                alt='logo'></Image>
            </div>


             <ul className='flex items-center gap-3' >
                   <li><Link href={'/profile'}>Profile</Link></li>
                { user? <>


                <li>
                     <Avatar>
        <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
                </li>
                <li ><Button onClick={handleSignOut} variant='danger' className={'rounded-none'}>Log out</Button></li>
                
                </> 
                
                :
                
                <>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
                
                </>}
                
                
            </ul>
            
        </nav>
    );
};

export default Nabver;