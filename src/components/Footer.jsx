import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {BsTwitter,BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <div>
      <footer className="bg-black p-[70px]">
        <div className='text-white max-w-[1170px] m-auto'>
          <div className='flex flex-wrap'>
            <div className='p-15 w-[25%]'>
              <h4 className='text-2xl font-Poppins capitalize mb-[30px] relative font-medium '>
              Company
              <span className='absolute left-0 bottom-[-10px] bg-pink-500 h-[2px] box-border w-[50px]'>
              </span>

              </h4>
              <ul>
               
                <Link to={'/'}><li className='mb-[5px]'>Our Services</li></Link>
                <Link to={'/'}><li className='mb-[5px]'>Privacy Policy</li></Link>
                <Link to={'/'}><li className='mb-[5px]'>Affiliate Now</li></Link>
              </ul>
            </div>

            <div className='p-15 w-[25%]'>
              <h4 className='text-2xl font-Poppins capitalize mb-[30px] relative font-medium'>
                Get help
                <span className='absolute left-0 bottom-[-10px] bg-pink-500 h-[2px] box-border w-[50px]'>
               </span>

              </h4>
              <ul>
                <Link to={'/'}><li className='mb-[5px]'>FAQ</li></Link>
                <Link to={'/'}><li className='mb-[5px]'>Shipping</li></Link>
                <Link to={'/'}><li className='mb-[5px]'>returns</li></Link>
                <Link to={'/'}><li className='mb-[5px]'>Order Status</li></Link>
                <Link to={'/'}><li className='mb-[5px]'>Payment options</li></Link>
              </ul>
            </div>

            <div className='p-15 w-[25%]'>
              <h4 className='text-2xl font-Poppins capitalize mb-[30px] relative font-medium'>
                Menu Card
                <span className='absolute left-0 bottom-[-10px] bg-pink-500 h-[2px] box-border w-[50px]'>   
               </span>

              </h4> 
              <ul className=''>
                <Link to={'/'} className='' ><li className='mb-[5px]'>Fruits</li></Link>
                <Link to={'/'}  ><li className='mb-[5px]'>Ice-cream</li></Link>
                <Link to={'/'}><li className='mb-[5px]'>Rice</li></Link>
                <Link to={'/'}><li className='mb-[5px]'>Chicken</li></Link>
              </ul>
            </div>

            <div className=' p-15 w-[25%]'>
              <h4 className='text-2xl font-Poppins capitalize mb-[30px] relative font-medium'>
                Follow Us
                <span className='absolute left-0 bottom-[-10px] bg-pink-500 h-[2px] box-border w-[50px]'> 
               </span>

              </h4>
              <div className='flex flex-row   mt-[10px] '>
                <div className=' flex justify-center items-center mr-[10px] mb-[10px] h-[40px] rounded-full  bg-white/20 w-[40px]'>
                <BsFacebook></BsFacebook>
                </div>
                <div className='flex justify-center items-center   mr-[10px] rounded-full mb-[10px] h-[40px]  bg-white/20 w-[40px]'>
                  <div className='leading-10 text-center'>
                <BsTwitter ></BsTwitter>
                </div>
                </div>
                <div className='flex justify-center items-center mb-[10px] rounded-full mr-[10px] h-[40px]  bg-white/20 w-[40px]'>
                <BsInstagram ></BsInstagram>
                </div>
               
               <div className='flex items-center justify-centermb-[10px] rounded-full mr-[10px] h-[40px]  bg-white/20 w-[40px] '><BsWhatsapp></BsWhatsapp></div> 
               
           
               
              
        
              </div>
            </div>
          </div>
        </div>



      </footer>
    </div>
  )
}

export default Footer
