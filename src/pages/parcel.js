import React from 'react'

const Parcel = () => {
  return (
    <div className='max-w-[1400px] h-full text-white bg-cyan-950 pt-2'>
      <div className='flex justify-center'>
       <h3 className='text-2xl md:text-4xl font-bold text-teal-400'>Parcel Services:</h3>
     </div>
     <div className='p-4'>
      <p className=' text-center sm:text-lg'>We are delighted to cater needs of every client of ours in terms of package delivery.</p>
      <p className=' text-center sm:text-lg'>Our systems are designed to help you deliver your packages safely, securely, cheaply & timely.</p>
      <h3 className=' text-center sm:text-lg  '>Parcel Services has never been easier with the following steps:</h3>
    </div>
    <div className='grid sm:grid-cols-3'>
<div className='flex flex-col justify-center items-center'>
  <div className='rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]'>
  <img className='object-cover rounded-full h-full w-full' src="https://img.freepik.com/premium-photo/delivery-man-work-uniform-delivers-postal-package-generated-ai_911917-1972.jpg" alt="package" />
</div>
<p className=' text-center'>Send your package to us</p>
</div>
<div className='flex flex-col justify-center items-center'>
  <div className='rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]'>
  <img className='object-cover rounded-full h-full w-full' src="https://img.freepik.com/free-photo/freight-transportation-delivering-cargo-containers-via-trucking-service-generative-ai_188544-9389.jpg" alt="package" />
</div>
<p className=' text-center'>Safely Transported</p>
</div>
<div className='flex flex-col justify-center items-center'>
  <div className='rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]'>
  <img className='object-cover rounded-full h-full w-full' src="https://img.freepik.com/premium-photo/closeup-courier-delivering-boxes_951562-19863.jpg" alt="package" />
</div>
<p className=' text-center'>Delivered to your destination</p>
</div>

    </div>
    
<div className=' items-center p-4'>
  <form action="" className='flex flex-col justify-center items-center'>
    <div className='w-full flex justify-center flex-col '>
  <h2 className='text-center md:text-2xl font-bold text-teal-400'>Fill out as below:</h2>
  
  <div className='grid md:grid-cols-2 w-full items-center justify-center'>
    <div>
      <h2 className='font-bold'>Sender's Info:</h2>
    <form action="" className='flex flex-col'>
    <label htmlFor="">Name:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='Enter Name' /></label>
    <label htmlFor="">Number:  <input className='p-1 outline-none border border-gray-400 my-2' type="tel" placeholder='070000000' /></label>
    <label htmlFor="">Email:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='Enter Email' /></label>
    <label htmlFor="">Parcel Type:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='eg:Laptop' /></label>
    <label htmlFor="">From:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='Enter Pickup location' /></label>
    <label htmlFor="">To:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='Enter Delivery location' /></label>
  </form>
  </div>
  <div> 
    <h2 className='font-bold'>Receiver's Info:</h2>
  <form action="" className='flex flex-col'>
    <label htmlFor="">Name:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='Enter Name' /></label>
    <label htmlFor="">Number:  <input className='p-1 outline-none border border-gray-400 my-2' type="tel" placeholder='070000000' /></label>
    <label htmlFor="">Email:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='Enter Email' /></label>
    <label htmlFor="">Parcel Type:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='eg:Laptop' /></label>
    <label htmlFor="">From:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='Enter Pickup location' /></label>
    <label htmlFor="">To:  <input className='p-1 outline-none border border-gray-400 my-2' type="text" placeholder='Enter Delivery location' /></label>
  </form>
  </div>
  
  </div>
 
 <div className='flex flex-col justify-center items-center'>
      <h3 className='text-2xl border-b-2 border-teal-500 text-teal-400 font-bold'>Below is our Package rates:</h3>
      <div >
        <table className=' m-2 border-gray-400 w-[300px] table-auto border'>
          <th className='border p-2 border-gray-400 border-collapse'>Location</th>
          <th className='border p-2 border-gray-400 border-collapse'>Prices</th>
          <tr>
            <td className='border p-2 border-gray-400 border-collapse' >Murang'a to Nairobi</td>
            <td className='border p-2 border-gray-400 border-collapse'>Ksh.300</td>
          </tr>
          <tr>
            <td className='border p-2 border-gray-400 border-collapse'>Maragua to Nairobi</td>
            <td className='border p-2 border-gray-400 border-collapse'>Ksh.250</td>
          </tr>
          <tr>
            <td className='border p-2 border-gray-400 border-collapse'>Kenol to Nairobi</td>
            <td className='border p-2 border-gray-400 border-collapse'>Ksh.200</td>
          </tr>
          <tr>
            <td className='border p-2 border-gray-400 border-collapse'>Thika to Nairobi</td>
            <td className='border p-2 border-gray-400 border-collapse'>Ksh.150</td>
          </tr>
          <tr>
            <td className='border p-2 border-gray-400 border-collapse'>Murang'a to Thika</td>
            <td className='border p-2 border-gray-400 border-collapse'>Ksh.200</td>
          </tr>
          <tr>
            <td className='border p-2 border-gray-400 border-collapse'>Maragua to Thika</td>
            <td className='border p-2 border-gray-400 border-collapse'>Ksh.150</td>
          </tr>
          <tr>
            <td className='border p-2 border-gray-400 border-collapse'>Kenol to Thika</td>
            <td className='border p-2 border-gray-400 border-collapse'>Ksh.100</td>
          </tr>
        </table>
      </div>
     </div>
</div>
    <input type="amount" placeholder='Enter Amount' className='p-2 outline-none border m-2 border-gray-300' />
    <button className='bg-green-500 font-bold text-white p-2 w-[200px] mb-2'>Pay</button>
  </form>
</div>
    </div>
  )
}

export default Parcel