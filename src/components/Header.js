
import {LOGO_URL} from "../utiles/constants"
import {useState ,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus";
// import UserContext from "../utiles/UserContext";
import {useSelector} from "react-redux";
export const Header = () => {
   const onlineStatus=useOnlineStatus();
  const [btnName,setbtnName]=useState("Login");
  // const {loggedInUser}=useContext(UserContext);
  //console.log(loggedInUser);
   //subscribing the store
   const cartItems =useSelector((sotre)=>sotre.cart.items);
  // useEffect(()=>{console.log("useEffect CALLED")},[btnName]);
    return (
      <div className=" w-full flex justify-between bg-red-200  opacity-100 shadow-2xl h-16 md:h-20 md:sticky top-0 z-40 ... flex-shrink   ">
        <div className="logo-continer ">
          <img
            className="absolute md:relative w-16 md:w-[28%] bg-cover cursor-pointer "
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="flex w-full items-center ">
          <ul className="flex relative ml-6 md:justify-end md:px-2 md:p-4 10/12 overflow-x-hidden md:w-full m-0 md:m-4 items-center ">
            <li className="text-xs invisible  md:visible mx-1 md:text-lg  md:px-4   font-bold">Online {onlineStatus?"🟢":"🔴"}</li>
            <li className="text-xs  md:text-lg     md:px-4 hover:text-blue-700 hover:bg-green-100 rounded-md py-1  font-bold"><Link to="/">Home</Link></li>
            <li className="text-xs mx-1 md:text-lg   md:px-4 hover:text-blue-700 hover:bg-green-100 rounded-md py-1 font-bold"><Link to="/about">About</Link></li>
            <li className="text-xs mx-1 md:text-lg  md:px-4 hover:text-blue-700 hover:bg-green-100 rounded-md py-1 font-bold"><Link to="/contact">Contact</Link></li>
            <li className="text-xs mx-1 md:text-lg  md:px-4 hover:text-blue-700 hover:bg-green-100 rounded-md py-1 font-bold"><Link to ="/grocery">Grocery</Link></li>
            <li    className="text-xs mx-1 md:text-lg   md:px-4 hover:text-blue-700 hover:bg-green-100 rounded-md py-1 font-bold cursor-pointer p "><Link to="/cart">🛒{cartItems.length}(items)</Link></li>
            <button className="invisible  md:visible text-xs md:text-lg btn md:w-20 md:mx-2 md:px-4 py-1 md:py-2  px-1 text-white hover:text-black rounded-lg hover:bg-gray-50 shadow-xl transition ease-in-out delay-0 bg-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300  " onClick={()=>{btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
            {/* <li className="px-4 hover:text-blue hover:bg-green-100 rounded-md py-1 font-bold cursor-pointer p">{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
