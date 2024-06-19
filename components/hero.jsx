import React from 'react'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex justify-around pt-10 px-4 text-center md:text-left flex-wrap h-screen">
      <div className="flex flex-col flex-wrap items-center sm:items-start text-3xl font-extrabold text-white  mt-20">
        <div >
          <p>
            Crafting Your Digital Dreams: <br />
            <span> We Build Websites That Shine!</span>
          </p>
          
        </div>
        <div className="flex justify-center w-full py-2 md:py-2 ">
        <Link href="./websitebuilder"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
         Get Started</button></Link>
        </div>

      </div>
      <div>
        <img src="https://svgshare.com/i/xUw.svg" className="hidden md:flex"></img>
        {/* <img src="https://assets.website-files.com/632df91dd7c99c0ac992c47b/63f62467ec051f406ea8b0a2_testimonial-hero.svg" alt="" /> */}
      </div>
    </div>
  );
}

export default Hero