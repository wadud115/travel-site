'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LogInPage = () => {
const handleGoogleSignIn = async()=>{

    await authClient.signIn.social({
        provider: 'google'

    })

}
    

    const onSubmit = async(e)=>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user)

        const {data , error } = await authClient.signIn.email({
            
            password : user.password,
           
            email : user.email
        })


        console.log({data,error})

        if(data){
            redirect('/')
        }
    }
    return (
        <div className='max-w-7xl mx-auto my-10'>

            <div className='my-3 text-center'>
                <h1 className='font-bold text-2xl'>Log in</h1>
                <p className='text-gray-600'>Start your adventure with Wanderlust</p>
            </div>


            <Card className='p-5 rounded-none'>   
                
                    <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">



      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>



      
  
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={'bg-cyan-500 rounded-none w-full'} type="submit">
          
          Login
        </Button>
       
      </div>
    </Form>

    <div>
        <div className='flex justify-center gap-3 items-center my-3 '>
    
             <Separator></Separator>
    
            <div className='whitespace-nowrap'>Or sign up with</div>
                <Separator></Separator>
            
    
             </div>
    
             <div>
                <Button onClick={handleGoogleSignIn} variant='outline' className={"rounded-none w-full"}> <FcGoogle /> Sign Up With Google</Button>
    
             </div>
             </div>
    
    </Card>
     
        </div>
    );
};

export default LogInPage;