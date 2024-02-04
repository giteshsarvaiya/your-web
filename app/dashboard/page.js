
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input} from "@nextui-org/react";
// import React, {useState, useEffect} from 'react'
import { Client, Account } from "appwrite";
import axios from 'axios';
import Button from '../components/Button.jsx'



const Dashboard = () => {
    

 function createUser() {
    const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64ff77a619e2d6d3c6e3');
    const account = new Account(client);
    async function fetchdata(account) {
        const session = await account.getSession('current');
        console.log(session.provider);
        console.log(session.providerUid);
        console.log(session.providerAccessToken);
        // console.log(session.providerAccessTokenExpiry);
        // const response = await axios.get(`https://people.googleapis.com/v1/people/${session.providerUid}`);
      
        // setPersonData(response.data);
        // console.log(response)
        const peopleApiUrl = 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses';
        const googleResponse = await axios.get(peopleApiUrl, {
          headers: {
            Authorization: `Bearer ${session.providerAccessToken}`,
          },
        });

        console.log('Google Response:', googleResponse.data);
        setUserData(googleResponse.data);
  

    }
    fetchdata(account)
 }
    // Provider information









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
          <Button/>

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

export default Dashboard