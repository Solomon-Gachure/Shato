import React from 'react'

const Book = () => {
  return (
    <div className='max-w-[1400px] h-screen pt-2'>
     <div className='flex justify-center'>
       <h3 className='text-2xl md:text-4xl font-bold'>Ticket Booking</h3>
     </div>
     <div className='p-4'>
      <p className=' text-center text-lg'>We are streamlined to cater needs of every client of ours.</p>
      <p className=' text-center text-lg'>With the upscale of activities day in day out, we offer online ticket booking for passengers within our routes.</p>
      <p className=' text-center text-lg'>Our online booking system also caters for customers that want to hire our vehicles for events such as:
      </p>
      <div className='flex items-center justify-center '>
        <ul className='  text-center list-disc '>
          <li className='py-1 '>Weddings</li>
          <li className='py-1 '>Burials</li>
          <li className='py-1 '>Graduations</li>
          <li className='py-1 '>and more</li>
        </ul>
      </div>
     </div>
     <div className='flex flex-col justify-center items-center'>
      <h3 className='text-2xl border-b-2 border-teal-500 font-bold'>Below is our Fare rates:</h3>
      <div>
        <table>
          <th>Location</th>
          <th>Prices</th>
          <tr>
            <td>Murang'a to Nairobi</td>
            <td>Ksh.300</td>
          </tr>
          <tr>
            <td>Maragua to Nairobi</td>
            <td>Ksh.250</td>
          </tr>
          <tr>
            <td>Kenol to Nairobi</td>
            <td>Ksh.200</td>
          </tr>
          <tr>
            <td>Thika to Nairobi</td>
            <td>Ksh.150</td>
          </tr>
          <tr>
            <td>Murang'a to Thika</td>
            <td>Ksh.200</td>
          </tr>
          <tr>
            <td>Maragua to Thika</td>
            <td>Ksh.150</td>
          </tr>
          <tr>
            <td>Kenol to Thika</td>
            <td>Ksh.100</td>
          </tr>
        </table>
      </div>
     </div>
     <div className='flex justify-center p-2 '>
      <h3 className='text-2xl font-bold border-teal-500 border-b-2'>You Can Book as below:</h3>
     </div>
     <div className='flex  justify-center'>
      <form action="" className='flex flex-col justify-center'>
        <label htmlFor="">Name <input type="text" placeholder='Enter your Name' /></label>
        <label htmlFor="">Email <input type="text" placeholder='Enter your Email' /></label>
        <label htmlFor="">Phone Number <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx" required/></label>
        <label htmlFor="">PickUp Time <input type="time" id="timePicker" name="timePicker"></input></label>
      
      <label for="pickupLocation">Select Pickup Location: 
      <select id="pickupLocation" name="pickupLocation">
  <option value="nairobi">Nairobi</option>
  <option value="thika">Thika</option>
  <option value="maragua">Maragua</option>
  <option value="kenol">Kenol</option>
  <option value="muranga">Murang'a</option>
</select></label>

      <label for="amount">Select an Amount: 
      <select id="amount" name="amount">
  <option value="300">300</option>
  <option value="250">250</option>
  <option value="200">200</option>
  <option value="150">150</option>
  <option value="100">100</option>

</select>
</label>

<div className='items-center flex justify-center p-2 '>
  <button className='bg-green-500 font-bold text-white w-[100px] rounded-lg '>Submit</button>
</div>
      </form>
     </div>
     
    </div>
  )
}

export default Book