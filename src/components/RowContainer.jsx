import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const RowContainer = ({ flag, data, scrollValue }) => {

  const rowContainer = useRef();

  const [{ cartItems }, dispatch] = useStateValue();

  const [items, setItems] = useState([]);


  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  }

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={rowContainer} className={`w-full flex items-center gap-3 my-12 scroll-smooth ${flag
        ? "overflow-x-scroll scrollbar-none "
        : "overflow-x-hidden flex-wrap justify-center"
      }`}>
      {data && data.map((item) => (
        <div key={item?.id} className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] backdrop-blur-lg rounded-lg px-4 bg-cardOverlay p-2 my-12  flex flex-col items-center justify-evenly relative hover:drop-shadow-lg">

          <div className="w-full items-center flex justify-between">


            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-40  h-40 -mt-8 drop-shadow-2xl"
            >
              <img src={item?.imageURL} alt="" className='w-full h-full object-contain'/>
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md" onClick={()=>setItems([...cartItems, item])}>
              <MdShoppingBasket className="text-white"></MdShoppingBasket>
            </motion.div>
          </div>
          <div className="w-full flex flex-col items-end justify-end -mt-8 ">
            <p className="text-textColor font-semibold text-base md:text-lg">
              {item?.title}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              {item?.calories} Calories
            </p>
            <div className="flex items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-sm text-red-500">$</span> {item?.price}
              </p>
            </div>
          </div>
        </div>
      ))}


    </div>

  )
}

export default RowContainer
