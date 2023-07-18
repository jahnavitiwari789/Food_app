import React,{useEffect} from 'react'
import { Header,MainContainer,CreateContainer,Footer, AboutUs,Service } from './components'
import { Route,Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'

const App = () => {

  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () =>{
    await getAllFoodItems().then((data)=>{
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });

    })
    

  };
  useEffect(() => {
    fetchData();
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
    <Header>  
    </Header>
    <main className="mt-14 md:mt-20  px-4 md:px-16 py-4 w-full">
      <Routes>
        <Route path='/*' element={<MainContainer/>}></Route>
        <Route path='/createItem' element={<CreateContainer/>}></Route>     
        <Route path='/aboutUs' element={<AboutUs/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
    </main>
    <Footer></Footer>
  </div>
  </AnimatePresence>
    
  )
}

export default App
