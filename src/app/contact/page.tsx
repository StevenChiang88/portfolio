import React from 'react'
import {BsFillTelephoneFill } from 'react-icons/bs'
import{BiMailSend} from 'react-icons/bi'
const ContactPage = () => {
  return (
    <div className='min-h-[calc(100vh_-_324px)] flex flex-col items-center justify-center'  >

 <h3 className='text-center'>Contact</h3>
 <div>
    <div className='flex flex-col md:flex-row items-center justify-between bg-gray-400 rounded-lg px-8 py-4 my-10 md:w-[500px]'>
 <BiMailSend className='text-[60px]   hover:text-[#E2A64A] duration-500 '/>
<a href='mailto:stevenjtc1015@gmail.com'> <h4  className='cursor-pointer hover:text-[#E2A64A] duration-500'>stevenjtc1015@gmail.com</h4>
</a>
 </div>
 <div className=' flex flex-col md:flex-row items-center justify-between bg-gray-400 rounded-lg px-8 py-4 my-10'>

<BsFillTelephoneFill className='text-[50px]  hover:text-[#E2A64A] duration-500 '/>
<a href='tel:0968918897'>
<h4  className='cursor-pointer hover:text-[#E2A64A] duration-500'>0968-918-897</h4>

</a>
</div>
 </div>

 </div>


  )
}

export default ContactPage