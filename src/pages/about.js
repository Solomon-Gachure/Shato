import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1400px] h-screen pt-2'>
      <div>
        <h3 className='text-4xl md:text-6xl flex justify-center p-2'>Know About Us:</h3>
        <p>Murang'a BebaBeba vehicles offer a commendable service, ensuring the safe and reliable transportation of people to Nairobi and back. With a strong commitment to passenger safety and comfort, these vehicles have earned a stellar reputation. They boast skilled drivers who navigate the road with precision, providing peace of mind for travelers. Their well-maintained vehicles undergo regular inspections, guaranteeing a secure journey. Not only do they prioritize safety, but they also offer a convenient and efficient mode of travel, contributing to the region's connectivity and accessibility. Murang'a transport vehicles exemplify the essence of dependable, safe, and commendable transportation services to and from Nairobi.</p>
      </div>
      <div className=' sm:flex gap-2' >
        <div className='flex h-[500px] w-full p-2 relative pb-2'>
<div className='flex absolute h-full w-full justify-center items-center '>
  
            <p className=' text-white  p-2 text-3xl font-bold'>From the buzz of the city under the sun.</p>
</div>

          <img className=' object-cover w-full ' src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaSUyMGNpdHl8ZW58MHx8MHx8fDA%3D" alt="citi" />
        </div>
        <div className='flex h-[500px] w-full p-2 relative'>
<div className='flex absolute h-full w-full justify-center items-center pb-2'>
            <p className=' p-2 text-3xl text-white font-bold '>To the beautiful, green and flourishing county of Murang'a.</p>
</div>
          <img className='object-cover w-full  ' src="https://media.istockphoto.com/id/1434151607/photo/kenyan-tea-muranga.webp?b=1&s=170667a&w=0&k=20&c=iQf7zsL0e6h0czQM7Edxc2-HyO3Lbv2urUGyPmUGRKs=" alt="citi" />
        </div>
        
      </div>
    </div>
  )
}

export default About