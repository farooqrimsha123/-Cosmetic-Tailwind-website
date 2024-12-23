"use client";
import React from 'react'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);
  return (
    
      <section className='hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage: "url('/cosmetic 2.jpg')"}}>
      <Image 
         src="/cosmetic 6.jpg" 
        alt="Cosmetic Product" 
        width={500} 
        height={500} 
        />

    <div className='pl-o md:pl-16 text-white text-center'>
        <h1 className='text-6xl font-bold drop-shadow.md' data-aos="fade-up"> Welcome To Cosmetic World</h1>
        <p className='text-2xl mt-4'>Your one-stop shop for the best cosmetic</p>
        <button className='mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded.md font-bold'>Shop Now</button>
    </div>
    </section>   
    
  );
}

export default HomeContent
