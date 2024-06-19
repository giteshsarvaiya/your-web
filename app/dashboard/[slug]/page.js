"use client"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input} from "@nextui-org/react";
import { Client, Account } from "appwrite";
import axios from 'axios';
import { getuserDetails } from "@/app/utils/dashboard"
import { isLogin } from "@/app/utils/isLogin"
import { ButtonLogout } from "@/components/Button"


const Dashboard = async ({ params }) => {

  const userDetails = await getuserDetails(params.slug);
  const isLoggedin = await isLogin(params.slug.email);
  console.log(isLoggedin)
  return (
    <div className='flex flex-col items-center h-[100vh] w-full bg-gray-900'>
     <div className="flex w-[90vw] justify-center items-start p-6 font-bold text-xl md:text-3xl mt-20 ">
        <p className="text-white font-thin flex md:flex-row flex-col items-center md:gap-2" > Hello <span className="text-purple-400 font-bold"> {userDetails.documents[0].displayName} </span> </p>
    </div>
    <div className=" w-[90vw] ">
      <p className="text-center">Your Websites are listed here</p>
      </div>

    <div className="h-full flex items-end py-4">
    <ButtonLogout />
     </div> 
      
    </div>
  );
}

export default Dashboard