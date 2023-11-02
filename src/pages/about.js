import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1400px] h-screen pt-2'>
      <div>
        <h3 className='text-4xl md:text-6xl flex justify-center p-2'>Know About Us:</h3>
        <p>Murang'a BebaBeba vehicles offer a commendable service, ensuring the safe and reliable transportation of people to Nairobi and back. With a strong commitment to passenger safety and comfort, these vehicles have earned a stellar reputation. They boast skilled drivers who navigate the road with precision, providing peace of mind for travelers. Their well-maintained vehicles undergo regular inspections, guaranteeing a secure journey. Not only do they prioritize safety, but they also offer a convenient and efficient mode of travel, contributing to the region's connectivity and accessibility. Murang'a transport vehicles exemplify the essence of dependable, safe, and commendable transportation services to and from Nairobi.</p>
      </div>
      <div className=' sm:flex gap-2' >
        <div className='flex md:h-[500px] w-full p-2 relative pb-2'>
<div className='flex absolute h-full w-full justify-center items-center '>
  
            <p className=' text-white  p-2 text-3xl font-bold'>From the buzz of the city under the sun.</p>
</div>

          <img className=' object-cover w-full ' src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaSUyMGNpdHl8ZW58MHx8MHx8fDA%3D" alt="citi" />
        </div>
        <div className='flex md:h-[500px] w-full p-2 relative'>
<div className='flex absolute h-full w-full justify-center items-center pb-2'>
            <p className=' p-2 text-3xl text-white font-bold '>To the beautiful, green and flourishing county of Murang'a.</p>
</div>
          <img className='object-cover w-full  ' src="https://media.istockphoto.com/id/1434151607/photo/kenyan-tea-muranga.webp?b=1&s=170667a&w=0&k=20&c=iQf7zsL0e6h0czQM7Edxc2-HyO3Lbv2urUGyPmUGRKs=" alt="citi" />
        </div>
        
      </div>
      <p className='p-2'>We offer safe, reliable and affordable transportation to and fro the big city.  </p>
   <div className='grid md:grid-cols-2 p-2 gap-6 '>
    
      <p>The dedicated staff behind the scenes of our transportation systems deserve our heartfelt appreciation for their unwavering commitment to ensuring the safe, secure, and efficient movement of people and goods. These unsung heroes work tirelessly to keep our world connected and our lives enriched.

For those responsible for transporting people, their meticulous attention to detail, rigorous training, and constant dedication have made our journeys faster, more secure, and incredibly safe. From pilots soaring through the skies to train conductors guiding us on our way, and bus drivers ensuring we reach our destinations, these professionals demonstrate excellence in their roles daily.

Likewise, the unsung heroes of logistics and freight transportation ensure that the products we rely on every day arrive safely and on time. Their precise planning, careful handling, and logistical expertise underpin our global economy.

In every corner of the transportation industry, these professionals work diligently to enhance our lives, providing a foundation of trust and reliability. We owe them our deepest gratitude for their unwavering commitment to keeping our world moving forward.</p>
    <div className='flex justify-center items-center border rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px] ml-8'>
      <img className='object-cover rounded-full w-full h-full ' src="https://images.pexels.com/photos/12555019/pexels-photo-12555019.jpeg?auto=compress&cs=tinysrgb&w=600" alt="driver" />
    </div>
    
   </div>
   <div className='grid md:grid-cols-2 md:p-2  '>
    <div className='border rounded-full w-[200px] h-[200px] md:w-[400px] md:h-[400px] ml-8'>
      <img className='object-cover rounded-full w-full h-full  ' src="https://img.freepik.com/premium-photo/modern-societal-dynamics_810293-2306.jpg" alt="executives" />
    </div>
      <p>The executive team that steers a company's financial ship deserves unreserved praise for their invaluable contributions in keeping the organization afloat. These dedicated leaders are the backbone of financial stability and success, navigating turbulent economic waters with wisdom, strategy, and resilience.

Their expertise in financial planning, risk management, and decision-making is the cornerstone upon which a company's fiscal health is built. Their visionary leadership, sound judgment, and commitment to fiscal responsibility ensure not only survival but also growth, innovation, and prosperity.

In times of uncertainty, these executives are the calming force, making prudent investments, controlling costs, and diversifying revenue streams. Their ability to adapt to changing market dynamics and devise strategies for long-term sustainability is commendable.

The executive team's tireless efforts, combined with their ethical and transparent approach, inspire trust from investors, stakeholders, and the entire organization. Their dedication to maintaining financial stability is the bedrock upon which companies thrive and continue to make a positive impact. We owe them our gratitude for their exceptional role in steering the financial ship to success.</p>
    
    
   </div>
    </div>
  )
}

export default About