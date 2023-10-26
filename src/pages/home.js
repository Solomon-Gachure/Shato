import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[1400px] h-screen  pt-2 ' >
       
        <div className='flex flex-col justify-center items-center w-full p-4 py-8'>
          <h3 className='text-3xl md:text-4xl'>BebaBeba!!!</h3>
        <h6 className='text-xl flex-wrap p-4 md:text-6xl'>Welcome Aboard BebaBeba shuttle</h6>
        <p className='text-lg md:text-4xl'>Take a drive around!</p>
        
        </div>
        <div className='grid md:grid-cols-3 gap-6 max-w-[1400px] h-screen'>
          <div className='h-[550px] w-full border'>
            <img className='h-[300px] w-full object-cover' src="https://media.istockphoto.com/id/1437821404/photo/3d-data-security-protection-icon-businessman-hand-holding-green-shield-floating-on-blue.jpg?s=612x612&w=0&k=20&c=ihK21NnGipCDLaPvxYLfnQl9M6Si8ubcTVDf-l5MwRc=" alt="safe drivers" />
         <p className='p-2'><span className='border-b  pb-1 font-bold'>We offer safety through our highly trained drivers</span><br></br>
         Our transport company prioritizes safety above all else. We are committed to providing a secure and reliable journey for our customers. Our vehicles undergo rigorous maintenance, our drivers are trained in safety protocols, and we adhere to strict safety regulations, ensuring peace of mind for all passengers.</p>
          </div>
          <div className='h-[550px] border w-full'>
            <img className='h-[300px] w-full object-cover' src="https://media.istockphoto.com/id/1371650290/photo/3d-illustration-hands-giving-receiving-money.jpg?s=612x612&w=0&k=20&c=w5Ff0cnoIWjZ741UOv-6yBWMqqtTho1LnVhVnyV9hvQ=" alt="pocket friendly" />
          <p className='p-2'><span className='border-b  pb-1 font-bold'>We will drive you nuts with our cheap prices</span><br></br>
          Our transport company takes pride in offering budget-friendly rates. We believe in affordability without compromising quality. Through efficient operations and competitive pricing, we provide cost-effective transportation solutions that cater to our customers' diverse needs while ensuring a wallet-friendly experience for all.</p>
          </div>
          <div className='h-[550px] border'>
            <img className='h-[300px] w-full object-cover' src="https://media.istockphoto.com/id/1486944463/photo/3d-rendering-of-clapping-hands.jpg?s=612x612&w=0&k=20&c=jAm8YCAQRAGKQ20q7clSwc9kiS41HmtI40nlPx41eNc=" alt="reliable" />
          <p className='p-2'><span className='border-b  pb-1 font-bold'>We value customer satisfaction</span> <br></br>
          Customer satisfaction is our top priority at our transport company. We go the extra mile to understand and fulfill our clients' needs. From personalized services to responsive support, we are dedicated to ensuring a seamless, enjoyable experience for every customer, fostering trust, loyalty, and lasting relationships. </p>
          </div>
        </div>
    </div>
  )
}

export default Home