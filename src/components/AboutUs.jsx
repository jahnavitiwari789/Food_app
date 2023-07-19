import React from 'react'
import Testi1 from '../img/testimonial1.png'
import Testi2 from '../img/testimonial2.png'
import Testi3 from '../img/testimonial3.jpg'
import "../About.css"

const AboutUs = () => {
  return (

 <>
 <section id="hm" className='header-banner hover:'>

        <div className=" p-12 font-bold text-center font-serif text-4xl text-white">Welcome to MyOnlineMeal</div>
        <p className='p-2 text-white text-2xl font-serif'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam? Ex, sequi id voluptatum nisi totam placeat minima vel rem, laudantium numquam dolores quas dolore perferendis. Libero autem id sapiente? </p>
        
        <button className="btn  bg-gradient-to-r from-orange-300 to-orange-500">Order Now</button>
   
        </section>



   <div className='font-Poppins mt-2 bg-orange-200 text-white '>
    <div className='text-center py-10'>
      <div className='text-headingColor  font-bold text-4xl'>
        Testimonials
      </div>
      <div>
        <div className='text-3xl w-96 mx-auto font-semibold leading-normal mb-12'>
          Read What Others Have to Say
        </div>
      </div>
      <div className='flex md:flex-row flex-col mx-auto gap-8 group max-w-5xl'>
        <div className='bg-white/20 duration-500 cursor-pointer group-hover:blur-sm p-8 hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 rounded-xl'>
          <img src={Testi1} alt="" className=" h-20  w-20 object-cover mx-auto rounded-full" />
          <div className='text-xl uppercase font-bold'>Alena </div>
          <p className='text-sm leading-7 my-3 font-light opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsum aliquam! Nostrum ducimus reprehenderit dolore corporis repudiandae ratione magnam corrupti libero eius excepturi.</p>
      <button className='py-2.5 bg-orange-500 px-8 rounded-full'>Get In Touch</button>
        </div>

        <div className='bg-white/20  duration-500  cursor-pointer p-8  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  rounded-xl'>
          <img src={Testi2} alt="" className=" h-20 mx-auto rounded-full" />
          <div className='text-xl uppercase font-bold'>Marry Queen</div>
          <p className='text-sm leading-7 my-3 font-light opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsum aliquam! Nostrum ducimus reprehenderit dolore corporis repudiandae ratione magnam corrupti libero eius excepturi.</p>
      <button className='py-2.5 bg-orange-500 px-8 rounded-full'>Get In Touch</button>
        </div>

        <div className='bg-white/20 p-8 duration-500  cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 rounded-xl'>
          <img src={Testi3} alt="" className=" h-20 w-20 mx-auto rounded-full object-cover" />
          <div className='text-xl uppercase font-bold'>Atom Alex</div>
          <p className='text-sm leading-7 my-3 font-light opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsum aliquam! Nostrum ducimus reprehenderit dolore corporis repudiandae ratione magnam corrupti libero eius excepturi.</p>
      <button className='py-2.5 bg-orange-500 px-8 rounded-full'>Get In Touch</button>
        </div>
      </div>
      </div>
   </div>
  
     
        
   
   

</> 

  


  )
}

export default AboutUs

