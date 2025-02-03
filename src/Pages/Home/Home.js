import React,{useEffect, useContext} from 'react'
import UserContext from '../../Context/CreateContext.js'
import { useNavigate } from "react-router-dom";
import Herosection from '../../Components/Herosection/Herosection'
import Service from '../../Components/Service/Service'
import Gallery  from '../../Components/Gallery/Gallary'
import Scroll from '../../Components/scroll/scrolle.js'
import Brand from '../../Components/Brand/Brand.js'


const Home = () => {

  const navigate = useNavigate();
  const user = useContext(UserContext)

  // useEffect(() => {
  //   console.log(user);
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);
   

  return ( 
    <div>
    <Herosection/>
    <Scroll/>
    <Brand/>
    <Service/>
    <Gallery/>
   </div>
  )
}

export default Home