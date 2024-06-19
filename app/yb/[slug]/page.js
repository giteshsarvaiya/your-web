"use client";
import React from "react";
import { useRef, useState, useEffect, useMemo } from "react";
import { ScrollArea } from '@radix-ui/themes';
import { GPT } from "../../gpt/gpt";
import { Client, Databases, Query, ID } from "appwrite";
import {Navbar, NavbarBrand, NavbarMenuItem, Popover, PopoverTrigger, PopoverContent, NavbarMenu, NavbarMenuToggle, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";
// import {MoonIcon} from "./MoonIcon";
// import {SunIcon} from "./SunIcon";
import { createClient } from 'pexels';
import { motion, Variants } from "framer-motion";






const YourWeb = ({ params }) => {



    const defaultCode = {
        primarybg: 'bg-white',
        secondarybg: 'bg-gray-900',
        textprimaryColor: 'text-black',
        textsecondaryColor: 'text-white',
        tertiarybg: 'bg-gray-100',
        buttonhoverbg1: 'hover:bg-indigo-950',
        buttonhoverbg2: 'hover:bg-gray-200',
        svgbg: 'bg-gray-100',
        svgtextbg: 'text-gray-500',
        borderfocuscolor: 'border-gray-500',
        borderringfocuscolor: 'ring-gray-200',
        forminputborder:'border-gray-300',
        themebuttoncolor:'default'
    }

  const [data, setData] = useState({
    nameOfBusiness:"",
    hero:"",
    aboutUs:'',
    services:[],
    testimonials:[],
    location:'',
    imageHero:'',
    imageAboutUs:'',
    concatName:'',
  });

  const [colorCode, setColorCode] = useState(defaultCode);
  const [layOut, setLayout] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);
  const [Queryy, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState();


  const clientImage = createClient(
    "etFEhmaTjId1fuyXJgwNWBxSPc7M4UxIj86XMh6xriKYDpyME5ulWXKi"
  );

function generateName(name){
    const arr = name.split(" ", 10);
    const newName = "".concat(...arr);
    const concatName = newName.toLowerCase();
    return concatName

}
function getArray(array){

    // const genArray = array.split(',', 10);

    return array
}

//for navbar 
const menuItems = [
  {label:"About Us",
  link:"#aboutUs"},
  {label:"Services",
  link:"#services"},
  {label:"Testimonials",
  link:"#testimonials"},
  {label:"Contact Us",
  link:"#contactUs"},
];


  useEffect(() => {


    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

    const databases = new Databases(client);

    let promiseCheckAppwriteforgpt = databases.listDocuments(
      process.env.NEXT_PUBLIC_DB_ID,
      process.env,NEXT_DB_ID_GPT_ID,
      [Query.equal("uid", `${params.slug}`)]
    );

    promiseCheckAppwriteforgpt.then(
      //if length is 0, then do the complete gpt process, else just bring the gpt details from the appwrite database.
      //else fetch the appwrite database and show the details
      async function ({ total, documents }) {
        if (total === 0) {
          //  if the details are completely new,i.e. 0 documents in the databse for this slug id, then
          console.log("doing the process from beginning");
          let promise = databases.listDocuments(
            process.env.NEXT_DB_ID,
            process.env.NEXT_PUBLIC_DETAILS_ID,
            [Query.equal("$id", `${params.slug}`)]
          );

          promise.then(
            async function (response) {
              // images api

              const query = response.documents[0].typeOfBusiness;
              clientImage.photos
              .search({ query, per_page: 10 })
              .then((photos) => {
                console.log(photos);
                const photoAboutUs = photos.photos[0].src.landscape
                const photoHero = photos.photos[1].src.landscape

             
            
            console.log(response.documents[0]);
        

                
                // const aboutUs = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} business, generate an about-us text for this website in 5 words only `;
                // const gptAboutUs = await GPT(aboutUs);
                // console.log(gptAboutUs);
                // const hero = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate text for hero section for this website. in 10 words `
                // const gptHero = await GPT(hero);
                // setTimeout(async function() {
                //     const service1 = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate 3 demo services for this business in 10 words each and seperate each of them by "///" `
                //     const gptService1 = await GPT(service1);
                //     console.log(gptService1);
                //     const testimonial1 = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate exact 3 demo testimonials for this website each separated by "///" `
                //     const gptTestimonial1 = await GPT(testimonial1);
                //     console.log(gptTestimonial1);
                //   }, 60000);
                // setTimeout(async function () {
                //     console.log("2nd timeout");
                // const hero = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate text for hero section for this website. in 10 words `
                // const gptHero = await GPT(hero);
                //   }, 60000);
                  

                // const testimonial1 = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate exact 3 demo testimonials for this website each separated by "///" `
                // const gptTestimonial1 = await GPT(testimonial1);
                // console.log(gptTestimonial1);
                // const testimonial2 = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate text for hero section for this website. in 10 words `
                // const gptTestimonial2 = await GPT(hero);

                //   const service1 = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate 3 demo services for this business in 10 words each and seperate each of them by "///" `
                //   const gptService1 = await GPT(service1);
                //   console.log(gptService1);
                // const service2 = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate text for hero section for this website. in 10 words `
                // const gptService2 = await GPT(hero);
                // const service3 = `Suppose you are creating a website for ${response.documents[0].typeOfBusiness} generate text for hero section for this website. in 10 words `
                // const gptService3 = await GPT(hero);
                   const nameOfBusiness = response.documents[0].nameOfBusiness;
                   const typeOfBusiness = response.documents[0].typeOfBusiness;
                   const location = response.documents[0].location;

              const promisegpt = databases.createDocument(
                process.env.NEXT_DB_ID,
                process.env.NEXT_PUBLIC_GPT_ID,
                ID.unique(),
                {
                  aboutUs: `${gptAboutUs.text}`,
                  uid: `${params.slug}`,
                  hero: `${gptHero}`,
                  nameOfBusiness: `${nameOfBusiness}`,
                  typeOfBusiness: `${typeOfBusiness}`,
                  testimonials: [`${gptTestimonial1.text}`, `${gptTestimonial2.text}`],
                  services: [`${gptService1.text}`,`${gptService2.text}`,`${gptService3.text}`],
                  location: `${location}`,
                  imageAboutUs: `${photoAboutUs}`,
                  imageHero: `${photoHero}`
                }
              );
              promisegpt.then(
                function ({ aboutUs }) {
                  console.log(aboutUs);
                  setData(aboutUs);
                },
                function (error) {
                  console.log(error);
                }
              );
            }); // pexels ka .then hai
            },
            
            function (error) {
              console.log(error);
            }
          );
        } else {
          //if the details related gpt is already stored in appwrite, then bring out that same thing

          

          console.log("found the gpt hence not using ai for this slug id");
          const concatName = generateName(documents[0].nameOfBusiness)


          console.log(concatName)
          const {     nameOfBusiness,
          hero,
          aboutUs,
          services,
          testimonials,
          location,
          imageHero,
          imageAboutUs, } = documents[0];
          setData({...data, nameOfBusiness:`${nameOfBusiness}`, hero:`${hero}`, aboutUs:`${aboutUs}`, services:`${services}` , location:`${location}`, imageHero:`${imageHero}`, imageAboutus:`${imageAboutUs}`, concatName:`${concatName}`})
          console.log(data)
          console.log(documents[0]);
          console.log(data.services)
          
        }

      },
      function (error) {
        console.log(error);
      }
    );
  }, [params]);

  const cardVariants = {
    offscreen: {
      x: 300
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5
      }
    }
  };

  return (


    <div>
      {data ? (
        <div className="flex flex-col">
          {/* choices and publish button */}
          <div >
          <div className="fixed w-full flex-col pt-4 gap-2 bottom-0 bg-white z-10">
            <div className="flex flex-col">
            <div className='flex w-full justify-center gap-1 bg-white'>
        {/* <Popover placement="top" color="default">
          <PopoverTrigger>
            <Button>
              Layouts
            </Button>
          </PopoverTrigger>
          <PopoverContent color="foreground">
          <div className='flex w-full justify-center gap-1'>
            <button onClick={(e)=> setLayout(1) } className=' text-white rounded-2xl p-2'>Classic</button>
            <button onClick={(e)=> setLayout(2)} className=' text-white rounded-2xl p-2'>Modern</button>
            </div>
            </PopoverContent>
        </Popover> */}
                <Popover placement="top" color="foreground">
          <PopoverTrigger>
            <Button>
              Themes
            </Button>
          </PopoverTrigger>
          <PopoverContent color="foreground">
          <div className='flex w-full justify-center gap-1'>
            <button onClick={(e)=> setColorCode({...colorCode, secondarybg:'bg-gray-900', buttonhoverbg1:'hover:bg-gray-950', svgbg:'bg-gray-100', svgtextbg:'bg-gray-500', borderfocuscolor:'border-gray-500',  borderringfocuscolor:'ring-gray-200', themebuttoncolor:'default'}) } className='bg-gray-900 text-white rounded-2xl p-2'>Default</button>
            <button onClick={(e)=> setColorCode({...colorCode, secondarybg:'bg-indigo-500', buttonhoverbg1:'hover:bg-indgo-600', svgbg:'bg-indigo-100', svgtextbg:'bg-indigo-500', borderfocuscolor:'border-indigo-500',  borderringfocuscolor:'ring-indigo-200', themebuttoncolor:'secondary'})} className='bg-indigo-500 text-white rounded-2xl p-2'>Purple</button>
            <button onClick={(e)=> setColorCode({...colorCode, secondarybg:'bg-blue-500', buttonhoverbg1:'hover:bg-blue-600', svgbg:'bg-blue-100', svgtextbg:'bg-blue-500', borderfocuscolor:'border-blue-500',  borderringfocuscolor:'ring-blur-200', themebuttoncolor:'primary'})} className='bg-blue-500 text-white rounded-2xl p-2'>Blue</button>
            </div>
            </PopoverContent>
        </Popover>
            </div>
            <div>
              <div className="w-full bg-white text-white h-[100%] my-2 flex justify-center">
                <button className="bg-indigo-500 w-[95vw] rounded-xl lg:p-2">Publish</button>
              </div>
             </div> 
            </div>
            </div>
          </div>


{/* main page */}
          <div className={`w-full h-[92vh] md:h-[90vh] overflow-auto`}>
          <div className={`flex-col w-full ${colorCode.primarybg}`}>
            {/* Navbar */}



            <Navbar  isBordered className={`${colorCode.secondarybg} h-[80px]`}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">{data.nameOfBusiness}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">{data.nameOfBusiness}</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#aboutUs">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#services" color="foreground">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#testimonials">
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contactUs" >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

    

      <NavbarMenu isMenuOpen={isMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.link}
              size="lg"
              onClick={(e)=>setIsMenuOpen("false")}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

            {/* HeroSection */}
            <div className="w-full h-screen flex  justify-center items-center px-10  lg-mt-0">
<section className={`${colorCode.textprimaryColor} body-font md:w-[90vw]`}>
  <div class="container mx-auto flex px-5 md:flex-row flex-col-reverse items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class={`title-font sm:text-4xl text-3xl mb-4 font-medium ${colorCode.textprimaryColor}`}>{data.hero}
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class={`inline-flex ${colorCode.textsecondaryColor} ${colorCode.secondarybg} border-0 py-2 px-6 focus:outline-none ${colorCode.buttonhoverbg1} rounded text-lg`}>About US</button>
        <button class={`ml-4 inline-flex ${colorCode.textprimaryColor} ${colorCode.tertiarybg} border-0 py-2 px-6 focus:outline-none ${colorCode.buttonhoverbg2} rounded text-lg`}>Contact Us</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {/* <img class="object-cover object-center rounded" alt="hero" src={`${data.imageHero}`}/> */}
      <img class="object-cover object-center rounded" alt="hero" src='https://images.pexels.com/photos/942572/pexels-photo-942572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'/>

    </div>
  </div>
</section>
            </div> 

            {/* About Us Section */}

            <motion.div
            id="aboutUs"
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash"/>
      <motion.div className="card" variants={cardVariants}>
      <div  className="w-full my-2  px-10 flex justify-center md:h-screen  sm:py-20 sm:h-auto items-center">
<section class={` ${colorCode.textprimaryColor} body-font`}>
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={`${data.imageAboutUs}`}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data.aboutUs}
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        {/* <button class={`inline-flex ${colorCode.textsecondaryColor} ${colorCode.secondarybg} border-0 py-2 px-6 focus:outline-none hover:${colorCode.buttonhoverbg1} rounded text-lg`}>Button</button>
        <button class={`ml-4 inline-flex ${colorCode.textprimaryColor} ${colorCode.tertiarybg} border-0 py-2 px-6 focus:outline-none hover:${colorCode.buttonhoverbg2} rounded text-lg`}>Button</button> */}
      </div>
    </div>
  </div>
</section>
            </div>
      </motion.div>
    </motion.div>


            {/* Services */}

            <motion.div
            id="services" 
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash"/>
      <motion.div className="card" variants={cardVariants}>
<section className={`${colorCode.textprimaryColor} body-font`}>
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className={`sm:text-3xl text-2xl font-medium title-font ${colorCode.textprimaryColor} mb-4`}>OUR SERVICES</h1>
      {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
      <div className="flex mt-6 justify-center">
        <div className={`w-16 h-1 rounded-full ${colorCode.secondarybg} inline-flex`}></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class={`w-20 h-20 inline-flex items-center justify-center rounded-full ${colorCode.svgbg} ${colorCode.svgtextbg} mb-5 flex-shrink-0`}>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24" data-darkreader-inline-stroke="">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">{data.services}</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class={`w-20 h-20 inline-flex items-center justify-center rounded-full ${colorCode.svgbg} ${colorCode.svgtextbg} mb-5 flex-shrink-0`}>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24" data-darkreader-inline-stroke="" >
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class=" text-lg title-font font-medium mb-3">The Catalyzer</h2>
          <p class="leading-relaxed text-base">{data.services[1]}</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class={`w-20 h-20 inline-flex items-center justify-center rounded-full ${colorCode.svgbg} ${colorCode.svgtextbg} mb-5 flex-shrink-0`}>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24" data-darkreader-inline-stroke="">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class=" text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">{data.services[2]}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</motion.div>
    </motion.div>

            {/* Customer Review */}
            <motion.div
            id="testimonials"
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash"/>
      <motion.div className="card" variants={cardVariants}>
            <section  className={` ${colorCode.textprimaryColor} body-font`}>
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className={`h-full ${colorCode.tertiarybg} p-8 rounded`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036" data-darkreader-inline-fill="">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">{data.testimonials[0]}</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium">Holden Caulfield</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full">
        <div class={`h-full ${colorCode.tertiarybg} p-8 rounded`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036" data-darkreader-inline-fill="">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">{data.testimonials[1]}</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium ">Alper Kamu</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</motion.div>
    </motion.div>
            {/* Contact Us*/}

            <motion.div
            id="contactUs" 
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash"/>
      <motion.div className="card" variants={cardVariants}>
            <div>
  <section className={` ${colorCode.textprimaryColor} body-font relative`}>
  <div className={`container px-5 py-24 mx-auto ${colorCode.primarybg} `}>
    <div className="flex flex-col text-center w-full mb-12 ">
      <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 ${colorCode.textprimaryColor}`}>Contact Us</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className={`leading-7 text-sm ${colorCode.textprimaryColor}`}>Name</label>
            <input type="text" id="name" name="name" className={`w-full ${colorCode.primarybg} bg-opacity-50 rounded border  ${colorCode.forminputborder} focus:${colorCode.borderfocuscolor} focus:bg-white focus:ring-2 focus:${colorCode.borderringfocuscolor} text-base outline-none ${colorCode.textprimaryColor} py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className={`leading-7 text-sm ${colorCode.textprimaryColor}`}>Email</label>
            <input type="email" id="email" name="email" className={`w-full ${colorCode.primarybg} bg-opacity-50 rounded border  ${colorCode.forminputborder} focus:${colorCode.borderfocuscolor} focus:bg-white focus:ring-2 focus:${colorCode.borderringfocuscolor} text-base outline-none ${colorCode.textprimaryColor} py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className={`leading-7 text-sm ${colorCode.textprimaryColor}`}>Message</label>
            <textarea id="message" name="message" className={`w-full ${colorCode.primarybg} bg-opacity-50 rounded border bo ${colorCode.forminputborder} focus:${colorCode.borderfocuscolor} focus:bg-white focus:ring-2 focus:${colorCode.borderringfocuscolor} h-32 text-base outline-none ${colorCode.textprimaryColor} py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className={`flex mx-auto ${colorCode.textsecondaryColor} ${colorCode.secondarybg} border-0 py-2 px-8 focus:outline-none hover:${colorCode.buttonhoverbg1} rounded text-lg`}>Button</button>
        </div>
        
      </div>
    </div>
  </div>
</section>

    </div>
    </motion.div>
    </motion.div>


            {/* Footer */}
            <footer class={`${colorCode.textprimaryColor} body-font`}>
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center">
      <span class="ml-3 text-xl ">{data.nameOfBusiness}</span>
    </a>
    <p class="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2  sm:py-2 sm:mt-0 mt-4">© Website built by —
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@giteshsarvaiya</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" data-darkreader-inline-fill="" >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 ">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" data-darkreader-inline-fill="">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" data-darkreader-inline-stroke="">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 ">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" >
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" data-darkreader-inline-stroke="" ></path>
          <circle cx="4" cy="4" r="2" stroke="none" data-darkreader-inline-stroke="" ></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
{/* <div className="w-full h-4">
                    <button className="bg-blue-200 w-full">
                        Publish
                    </button>
                </div> */}
            </div>
            </div>
            </div>
      ) : (
        <div className='flex w-full h-[100vh] justify-center items-center'>

        <div className="flex-col text-center">
        <div>
        <p>Loading...</p>
        <p>Your wesbite is getting ready...</p>
        <p>Please Wait for a Minute</p>
        </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default YourWeb;
