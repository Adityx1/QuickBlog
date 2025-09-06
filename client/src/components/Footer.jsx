import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-10 text-gray-500 border-b border-gray-500/30 py-10'>
            <div>
                <img src={assets.logo} alt="logo"  className='w-32 sm:w-44'/>
                <p className='max-w-[410px] mt-6'>QuickBlog is your go-to source for tech insights, tips, and updates from the digital world.</p>
            </div>

            <div className='flex gap-5 md:w-[45%] flex-wrap justify-between w-full'>
                {footer_data.map((section,index)=>(
                    <div key={index} >
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>
                            {section.title}
                        </h3>
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link,i)=>(
                                <li key={i}>
                                    <a href="#" className='hover-underline transition'>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <p className='py-4 text-center text-gray-500/80 md:text-base text-sm'>
            Copyright @ 2025 QuickBlog Greatstack - All rights reserved.
        </p>
    </div>
  )
}

export default Footer