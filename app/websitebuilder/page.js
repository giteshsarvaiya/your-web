"use client";
import React, { useCallback } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Button,
  Checkbox,
  Autocomplete, AutocompleteItem
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { GPT } from "../gpt/gpt";
import { useRouter } from 'next/navigation'
import { Client, Databases, ID } from "appwrite";

const Form = () => {
  
  const router = useRouter()
  const [business, setBusiness] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [service1, setService1] = useState("");
  const [service2, setService2] = useState("");
  const [service3, setService3] = useState("");
  const [emptyError, setEmptyError]  =  useState("");

  const [form, setForm] = useState(1);
  const [formSubmit, setFormSubmit] = useState(0);
  const types = [{label:"Accountant"},
  {label:"Advertising"},
  {label:"Aerospace"},
  {label:"Agriculture"},
  {label:"Architecture"},
  {label:"Automotive"},
  {label:"Banking"},
 {label:"Biotechnology"},
  {label:"Catering"},
  {label:"Consulting"},
 {label:"Construction"},
  {label:"Design"},
  {label:"Education"},
  {label:"Energy"},,
  {label:"Entertainment"},
  {label:"Environmental"},
  {label:"Event Planning"},
  {label:"Fashion"},
  {label:"Finance"},
  {label:"Food and Beverage"},
  {label:"Health Care"},
  {label:"Hospitality"},
  {label:"Information Technology (IT)"},
  {label:"Insurance"},
  {label:"Legal"},
  {label:"Manufacturing"},
  {label:"Marketing"},
  {label:"Media"},
  {label:"Nonprofit"},
  {label:"Real Estate"},
  {label:"Retail"},
  {label:"Sports"},
  {label:"Technology"},
  {label:"Telecommunications"},
  {label:"Transportation"},
  {label:"Travel"},
  {label:"Utilities"},
  {label:"Wholesale"}]

 const handleSubmit = useCallback(()=>{
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("64ff77a619e2d6d3c6e3");

    // client.setKey('31f590d0b35c491b44eb80bb6e3b52eab13d938567050ba637d39975edafb9a4a55e792f9784a6470203e863d6e654e948b485852a2bb5104a690384c4f6da4380ace8bd2a68249258ed7ed95cb7f01a41d15836bbb60514c44b6e7969d91bfc7098c424c1ae0a38e8c735c6a6215092103f0b1abeeb336e41c2a76510e2b46b')
    const databases = new Databases(client);

    const promise = databases.createDocument(
      "6569c7cd36b3636efb40",
      "6569c7e5a79773498c06",
      ID.unique(),
      { typeOfBusiness: business,
      location: address,
      nameOfBusiness: name,
      service1: service1,
      services2: service2,
      service3: service3,
    }
    );

    promise.then(
      function (response) {
        console.log(response);
        router.push(`/yb/${response.$id}`)
      },
      function (error) {
        console.log(error);
      }
    );
  

 }, [formSubmit, business, address, name])
 

  function handleChange1() {
    if(business){
      console.log(business);
      setForm(form + 1);
    } else {
      setEmptyError("Please fill the form correctly");
    }

  }

  function handleChange2() {
    if(address){
      console.log(address);
      setForm(form + 1);
    } else {
      setEmptyError("Please fill the form correctly");
    }

  }

  function handleChange3() {
    if(name){
      console.log(name);
      setForm(form + 1);
    } else {
      setEmptyError("Please fill the form correctly");
    }

  }

  function handleBack() {
    console.log("back");
    setForm(form - 1);
  }

  // function handleSubmit(){
  //   if (service1 && service2 && service3){
  //   console.log(service1)
  // } else {
  //   setEmptyError("Please fill the form correctly") }
  // }

  return (

    
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-black via-purple-900 to-purple-600 gap-4">
    {/* top step show  */}
      <nav className="flex w-full pt-4 justify-center items-center ">
        <div className="w-auto flex justify-around ">
          {form == 1 && (
            <div className=" justify-between items-center w-full gap-1 flex">
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                <p className="flex">Industry</p>
                
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2 "></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                 <p className=" hidden md:flex">Location</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2"></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
            <p className=" hidden md:flex">Name</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2"></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Services</p>
              </Checkbox>
            </div>
          )}

          {form == 2 && (
            <div className=" justify-between items-center w-full gap-2 flex">
              <Checkbox
                defaultSelected
                color="primary"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Industry</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-1 mt-2 mb-2 "></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                <p className="flex">Location</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2"></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Name</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2"></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Services</p>
              </Checkbox>
            </div>
          )}

          {form == 3 && (
            <div className="justify-between items-center w-full gap-2 flex">
              <Checkbox
                defaultSelected
                color="primary"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Industry</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-1 mt-2 mb-2 "></div>
              <Checkbox
                defaultSelected
                color="primary"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Location</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2"></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                <p className="flex">Name</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2"></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Services</p>
              </Checkbox>
            </div>
          )}

{form == 4 && (
            <div className=" justify-between items-center w-full gap-2 flex">
              <Checkbox
                defaultSelected
                color="primary"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Industry</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-1 mt-2 mb-2 "></div>
              <Checkbox
                defaultSelected
                color="primary"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Location</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2"></div>
              <Checkbox
                defaultSelected
                color="primary"
                isReadOnly
                radius="full"
              >
                <p className=" hidden md:flex">Name</p>
              </Checkbox>
              <div class="w-12 md:w-24 border-b-3 mt-2 mb-2"></div>
              <Checkbox
                defaultSelected
                color="default"
                isReadOnly
                radius="full"
              >
                <p className="flex">Services</p>
              </Checkbox>
            </div>
          )}
        </div>
      </nav>


{/* actual form */}
      <div className="w-full md:flex justify-center items-center h-screen flex">
        <div>
          {/* for business type */}
          {form == 1 && (<div>
            <Card className="w-auto h-auto flex justify-center items-center flex-wrap">
              <CardHeader className="flex flex-col gap-3 justify-center">
                <Image
                  alt="form logo"
                  height={40}
                  radius="sm"
                  width={470}
                  src="https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-background_53876-160646.jpg?w=1380&t=st=1694608490~exp=1694609090~hmac=57d1da9cc539f01f839cdb52a9c1be646ee95991b2655eb44da6b1142e2e04a9"
                />
              </CardHeader>

              <CardBody className="flex flex-col  flex-wrap">
                <div className="flex flex-col gap-4 items-center flex-wrap">
                  <p className="text-2xl font-bold">
                    What type of business are you doing?
                  </p>
                  {/* <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    placeholder="Coaching,Photography,Landscape..."
                    value={business}
                    onValueChange={(e) => setBusiness(e)}
                  /> */}
                   <Autocomplete 
                   isRequired
                   fullWidth={true}
         placeholder="Coaching,Accountant,etc"
        className="max-w-xs" 
        allowsCustomValue={true}
        defaultInputValue={business}
        value={business}
        onInputChange={(value)=> setBusiness(value)}
      >
        {types.map((type) => (
          <AutocompleteItem key={type.value} value={type.value} >
            {type.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <p className="text-red-900">{emptyError}</p>
                  <Button
                    color="primary"
                    className="w-full"
                    type="submit"
                    onPress={handleChange1}
                  >
                    <p className="text-2xl">
                      Next <span className="text-xl">→</span>
                    </p>
                  </Button>
                </div>
              </CardBody>
            </Card>
            </div>
          )}

          {/* for location  */}
          {form == 2 && (
            <Card className="w-auto h-auto flex justify-center items-center">
              <CardHeader className="flex flex-col gap-3 justify-center">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  width={470}
                  src="https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-background_53876-160646.jpg?w=1380&t=st=1694608490~exp=1694609090~hmac=57d1da9cc539f01f839cdb52a9c1be646ee95991b2655eb44da6b1142e2e04a9"
                />
                <div className="flex justify-start w-full">
                  <Link onPress={handleBack}>← Back</Link>
                </div>
              </CardHeader>

              <CardBody className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-2xl font-bold">
                    What is Location of your business?
                  </p>
                  <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    placeholder="Loactaion of your Outlet"
                    value={address}
                    onValueChange={(e) => setAddress(e)}
                  />
                  <p className="text-red-900">{emptyError}</p>
                  <Button
                    color="primary"
                    className="w-full"
                    type="submit"
                    onPress={handleChange2}
                  >
                    <p className="text-2xl">
                      Next <span className="text-xl">→</span>
                    </p>
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

          {/* for business name */}
          {form == 3 && (
            <Card className="w-auto h-auto flex justify-center items-center">
              <CardHeader className="flex flex-col gap-3 justify-center">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  width={470}
                  src="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
                />
                <div className="flex justify-start w-full">
                  <Link onPress={handleBack}>← Back</Link>
                </div>
              </CardHeader>

              <CardBody className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-2xl font-bold">Name of Your Business ?</p>
                  <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    placeholder="Enter The Name of Your Business"
                    value={name}
                    onValueChange={(e) => setName(e)}
                  />
                  <p className="text-red-900">{emptyError}</p>
                  <Button
                    color="primary"
                    className="w-full"
                    type="submit"
                    onPress={handleChange3}
                    // onKeyUp={(e) => handleEnter(e)}
                  >
                    <p className="text-2xl">
                      Next <span className="text-xl">→</span>
                    </p>
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}

            {/* for services name */}
            {form == 4 && (
            <Card className="w-auto h-auto flex justify-center items-center">
              <CardHeader className="flex flex-col gap-3 justify-center">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  width={470}
                  src="https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-background_53876-160646.jpg?w=1380&t=st=1694608490~exp=1694609090~hmac=57d1da9cc539f01f839cdb52a9c1be646ee95991b2655eb44da6b1142e2e04a9"
                />
                <div className="flex justify-start w-full">
                  <Link onPress={handleBack}>← Back</Link>
                </div>
              </CardHeader>

              <CardBody className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-2xl font-bold">Name 3 of your servies ?</p>
                  <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    placeholder="Service 1"
                    value={service1}
                    onValueChange={(e) => setService1(e)}
                  />
                    <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    placeholder="Service 2"
                    value={service2}
                    onValueChange={(e) => setService2(e)}
                  />
                    <Input
                    isRequired
                    type="text"
                    variant="bordered"
                    placeholder="Service 3"
                    value={service3}
                    onValueChange={(e) => setService3(e)}
                  />
                  <p className="text-red-900">{emptyError}</p>
                  <Button
                    color="primary"
                    className="w-full"
                    type="submit"
                    onPress={handleSubmit}
                    // onKeyUp={(e) => handleEnter(e)}
                  >
                    
                    <p className="text-2xl">
                      Next <span className="text-xl">→</span>
                    </p>
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
