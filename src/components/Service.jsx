import React from 'react'
import '../ServiceUs.css'
import Img1 from '../img/1.png'
import Img2 from '../img/2.png'
import Img3 from '../img/3.png'
import Logo1 from '../img/logo1.png'
import Logo2 from '../img/logo2.png'
import Logo3 from '../img/logo3.png'
import Logo4 from '../img/logo4.png'



const Service = () => {
  return (
    <>
    <section>
    <div className='text-center  text-4xl   mt-2 font-bold'>Our Service</div>
      <div className='flex md:flex-row flex-col  w-full items-center justify-center'>
       
            <div className=" border-2 border-red-800 border-solid mx-3 my-6 p-34 rounded-lg bg-orange-200">
                <img src={Img1} alt="" className='h-[156px] m-auto block p-4'/>
                <h2 className="text-center text-3xl font-semibold p-4 text-headingColor">Food Catering</h2>
                <p className="text-center font-sans ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et qui, repudiandae similique nam, recusandae quidem ab asperiores ex, aut fugit labore veritatis facere?
                    sint delectus ab dolorum nam. </p>
            </div>
            <div className="border-2 border-red-800 border-solid mx-3 my-6 p-34 rounded-lg bg-orange-200">
                <img src={Img2} alt="" className='h-[156px] block m-auto p-4'/>
                <h2 className="text-center text-headingColor text-3xl p-4 font-semibold">Bulk Ordering</h2>
                <p className="text-center font-sans ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium a incidunt animi ad, ab dignissimos vero? Unde numquam odit repudiandae perferendis nisi.
                    sint delectus ab dolorum nam.</p>
            </div>
            <div className="border-2 border-red-800 border-solid mx-3 my-6 p-34 rounded-lg bg-orange-200">
                <img src={Img3} alt="" className='h-[156px] m-auto block p-4'/>
                <h2 className="text-center p-4 text-headingColor text-3xl font-semibold">Food Ordering</h2>
                <p className="text-center font-sans ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, culpa suscipit error
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident fugiat aliquam minima at explicabo. Earum eveniet quaerat, sunt molestias nesciunt quas! Quis.
                    sint delectus ab dolorum nam. </p>
            </div>
        </div>
    </section>
   
    <section  className='relative' >
        <div  className=' bg-[url("./img/bg.jpg")] w-full h-[100%]  bg-no-repeat  object-contain  bg-cover  '> 
        
     
        <div className="text-center text-4xl mt-2 font-bold relative text-black ">Our Clients</div>
        <div className="flex md:flex-row flex-col  item-center justify-center">
            <div className="p-[34px]">
                <img src={Logo1} alt="Our Client" className='h-[124px] hover:scale-75 '/>
            </div>
            <div className="p-[34px]">
                <img src={Logo2} alt="Our Client" className='h-[130px] hover:scale-75 '/>
            </div>
          
            <div className="p-[34px]">
                <img src={Logo3} alt="Our Client" className='h-[124px] hover:scale-75'/>
            </div>
            <div className="p-[34px]">
                <img src={Logo4} alt="Our Client" className='h-[124px] hover:scale-75 '/>
            </div>
        </div>
        </div>
    </section>

    <section className="relative">
        <div className='bg-[url("./img/contact.jpg")] bg-no-repeat bg-cover object-contain w-full h-[100%]'>
        <div className="text-center text-4xl mt-2 font-bold relative text-black">Contact Us</div>
        <div className="flex items-center pb=[34px] justify-center"> 
            <form  className=" w-[40%] "action="">
                <div className="form-group">
                    <label className="font-serif text-xl " for="name">Name: </label>
                    <input  className=' w-[100%] border-4 p-2 rounded-lg text-lg' type="text" name="name" id="name" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label className="font-serif text-xl" for="email">Email: </label>
                    <input className=' w-[100%]  border-4 p-2 rounded-lg text-lg' type="email" name="name" id="email" placeholder="Enter your email"/>
                </div>
                <div className="form-group ">
                    <label className="font-serif text-xl" for="phone">Phone Number: </label>
                    <input  className=' w-[100%]   border-4 p-2  rounded-lg text-lg' type="phone" name="name" id="phone" placeholder="Enter your phone"/>
                </div>
                <div className="form-group">
                    <label  className="font-serif text-xl" for="message">Message: </label>
                    <textarea className=' w-[100%]  border-4  p-2 rounded-lg text-lg' name="message" id="message" cols="30" rows="10" placeholder='Comment it'></textarea>
                </div>
            </form>
        </div>
        </div>
    </section>


   
   
</>
    
  )
}

export default Service
