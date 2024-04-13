'use client';
import React from 'react';
import '../app/globals.css';
export default function Home() {
  return (
    <div className='container-main'>
      <div className='heder-main'>
        <img src="/basic.png" alt="Time and Location" className='tl-img' />
        <img src="/indicators.png" alt="Battery and  Network" className='bn-img' />
      </div>
      <div className='text-main'>
        <p className='text-heder'>Lorem Ipsum...</p>
        <p className='text-heder1'>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='circle2 linec-3 m-auto absolute inset-0'>
        <div className='circle1 linec-2 m-auto absolute inset-0'>
          <div className='circle linec-1 m-auto absolute inset-0'>
            <div className="img-colors m-auto absolute inset-0">
              <img src="/ri_notification-2-line.png" alt="Notification" className="m-auto absolute inset-0" />
            </div>
          </div>
        </div>
      </div>

      <div className="button-a">
        <button className="relative w-[327px] h-[42px] rounded-md p-0 shadow-md overflow-hidden bg-gradient-to-r from-transparent via-red-600 to-transparent font-inter font-semibold text-[16px] text-center text-white small-screen md:w-[280px] md:h-[38px] lg:w-[300px] lg:h-[38px] transition duration-300 hover:shadow-lg hover:bg-red-700 hover:text-white">
          <span className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-red-600 to-transparent border-solid border-[1.4px] rounded-md"></span>
          <span className="text-sm">Send Notification</span>
        </button>
      </div>

    </div>
  );
}
