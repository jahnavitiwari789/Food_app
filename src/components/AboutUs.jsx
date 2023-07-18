import React from 'react'
import Testi1 from '../img/testimonial1.png'
import Testi2 from '../img/testimonial2.png'
// import Testi3 from '../img/testimonial3.jpg'
import "../About.css"

const AboutUs = () => {
  return (

 <>
 <section id="hm" className='header-banner'>

        <div className=" p-12 font-bold text-center font-serif text-4xl text-white">Welcome to MyOnlineMeal</div>
        <p className='p-2 text-white text-2xl font-serif'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam? Ex, sequi id voluptatum nisi totam placeat minima vel rem, laudantium numquam dolores quas dolore perferendis. Libero autem id sapiente? </p>
        
        <button class="btn bg-gradient-to-r from-orange-300 to-orange-500">Order Now</button>
   
        </section>


  
      <div className="wrapper">
      <div className="container-bx">
        <div className="container-bx-img-">
          <img
            src={Testi1}
            alt="testimonial-img"
          
          />
        </div>
        <div className="container-bx-content">
          <p>
             Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            pariatur molestias eaque expedita odit, reiciendis adipisci ipsam
            sit repudiandae do Lorem ipsum dolor sit amet. loremque!{" "}
          </p>
        </div>
      </div>
      <div className="container-bx">
        <div className="container-img-bx">
          <img
            src={Testi2}
            alt="testimonial-img"
          />
        </div>
        <div className="container-bx-content">
          <p>
             Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            pariatur molestias eaque expedita odit, reiciendis adipisci ipsam
            sit repudiandae do Lorem ipsum dolor sit amet. loremque!{" "}
          </p>
        </div>
      </div>
      <div className="container-bx">
        <div className="container-img-bx rounded-full">
          <img
            src="https://images.unsplash.com/photo-1689464090276-50bed9a6798f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            alt="testimonial-img"
           
          />
        </div>
        <div className="container-bx-content">
          <p>
             Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            pariatur molestias eaque expedita odit, reiciendis adipisci ipsam
            sit repudiandae do Lorem ipsum dolor sit amet. loremque!{" "}
          </p>
        </div>
      </div>
    </div>
   

</> 

  


  )
}

export default AboutUs

