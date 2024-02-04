import React from 'react';
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import { getRandomUser } from './experiment with fetching/exp';
import { GPT } from './gpt/gpt';

export default async function Home() {
  return (
    <div className='bg-gradient-to-tr from-black via-purple-900 to-purple-600'>
        <Navbar />
        <Hero />
    </div>
  )
}