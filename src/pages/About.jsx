import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-4 md:px-10">

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      {/* Flex container */}
      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>

        {/* Image section */}
        <img className='w-full md:max-w-[360px] rounded-lg shadow-lg' src={assets.about_image} alt="About Us" />

        {/* Text section */}
        <div className='md:w-1/2 text-gray-700 space-y-4'>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
            At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments
            and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform,
            integrating the latest advancements to improve user experience and deliver superior service. Whether you're
            booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <p className=' text-gray-800'>Our Vision</p>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap
            between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px:10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer-600'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
        <div className='border px:10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer-600'>
          <b>CONVENIENCE:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px:10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[20px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-500 cursor-pointer-600'>
          <b>PERSONALIZATION</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health</p>
        </div>
      </div>

    </div>
  )
}

export default About