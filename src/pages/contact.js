import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='max-w-[1400px] h-full text-white bg-cyan-950 pt-2'>
      <div className='w-full md:h-[500px] p-1 md:p-2'>
        <img className='w-full object-cover md:h-full' src="https://media.istockphoto.com/id/1129113667/photo/got-a-problem-contact-us.webp?b=1&s=170667a&w=0&k=20&c=sS8SbvVpWJn2c9WrfbDMrTvM1TGpeO6HrpXogoUtLAY=" alt="shout out" />
      </div>
      {/**input fields + text area */}
      <div className='flex flex-col justify-center items-center md:w-[1200px] p-4'>
<h3>We Value your Feedback:</h3>
<form action="https://getform.io/f/db96c5fb-9063-4883-a850-e833759e93be" method='POST' className='flex flex-col justify-center items-center md:w-[500px] gap-2 pt-2'>
  <input name='name' type="text" placeholder='Enter Your Name' className='outline-none w-full border p-2 text-black' />
  <input name='email' type="text" placeholder='Enter Your Email' className='outline-none w-full border p-2 text-black' />
  <textarea name="message" id="" cols="30" rows="5" placeholder='Enter Your Message' className='w-full p-2 text-black outline-none border'></textarea>
<button className='text-white bg-green-500 font-bold p-2 rounded-lg w-[200px]'>Submit</button>
</form>
      </div>
{/**Socials */}
      <div className='sm:w-full flex flex-col justify-center items-center '>
<p className=''>Follow us on all our socials to get updates and also comment on all your sentiments</p>
<div className='flex justify-center items-center pt-2 gap-8 md:gap-20'>
  <BsFacebook className=' cursor-pointer hover:scale-125 duration-500 ease-in text-teal-500' size={30}/>
  <BsInstagram className='cursor-pointer hover:scale-125 duration-500 ease-in text-teal-500' size={30}/>
  <BsWhatsapp className='cursor-pointer hover:scale-125 duration-500 ease-in text-teal-500' size={30}/>
  <FaTiktok className='cursor-pointer hover:scale-125 duration-500 ease-in text-teal-500' size={30}/>
  <BsLinkedin className='cursor-pointer hover:scale-125 duration-500 ease-in text-teal-500' size={30}/>

</div>
<div className='p-4'>
  <p>Also shoot us an email, let us hear your concerns and feedback on our services to you as we value your sentiments.</p>
</div>
      </div>
    </div>
  )
}

export default Contact