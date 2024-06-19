"use client"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Input, Button} from "@nextui-org/react";
import React, {useState, useEffect} from 'react'
import { Client, Account } from "appwrite";




const Login = () => {

  useEffect(() => {

    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('e3');
    const account = new Account(client);
    account.createOAuth2Session('google', 'http://localhost:3000/websitebuilder' , 'http://localhost:3000');
      }, []);


    console.log('hello1')



  return (
    <div className='flex justify-center h-[100vh] items-center bg-gradient-to-tr from-black to-purple-900'>
    

    <div>
    <Card className="w-full h-auto flex justify-center items-center">
      <CardHeader className="flex flex-col gap-3 justify-center">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://svgshare.com/i/xUj.svg"
          width={40}
        />
        <div className="flex flex-col gap-4 items-center">
          <p className="text-2xl">Welcome Back!</p>
          <Button color="primary" variant="bordered" className='w-full' >
          <Image
          alt="Google logo"
          height={20}
          radius="lg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          width={20}
        />
            Sign in with Google
          </Button>  
        </div>
      </CardHeader>


      {/* <div className='flex justify-center items-center gap-2'>
      <div class=" md:w-24 border-b-1 mt-2 mb-2"></div>
          <p>Or continue with</p>
          <div class=" md:w-24 border-b-1 mt-2 mb-2"></div>
      </div>
      <CardBody className='flex flex-col gap-4'>
        <Input type="email" variant='bordered'  label="Email" isRequired/>
        <Input type="password" variant='bordered' label='password' isRequired/>
        <Button color='primary'>
            Sign-In
        </Button>
        <div className='flex justify-end'>
          <Link>
            Forot Password
          </Link>
        </div>
      </CardBody> */}
      <Divider/>
      <CardFooter className='flex justify-center gap-2'>
        <p>Dont have an account?</p>
      <Link href="/websitebuilder">
            Sign up
      </Link>
      </CardFooter>
    </Card>
    </div>



    </div>
  );
}

export default Login