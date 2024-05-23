
import {CDN_URL}from "../utiles/constants";
// import UserContext from "../utiles/UserContext";
// import { useContext} from "react";
const ResturentCard = (props) => {
    const { resData } = props;
    //console.log(resData); 
    // const {loggedInUser}=useContext(UserContext);
    const {cloudinaryImageId,cuisines,costForTwo,avgRating,name}=resData?.info;
    return (
      <div data-testid="resCard" className=" m-2 md:m-4 p-1 md:p-3 w-[128px] h-[230px] md:w-[190px] md:h-[290px] rounded-lg bg-slate-200 hover:bg-gray-300 shadow-xl transition ease-in-out delay-0   hover:translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 hover:-z-50  hover:shadow-2xl"  >
        <img
          className="rounded-lg shadow-2xl "
          alt="res-caard-logo"
          src={
            CDN_URL+cloudinaryImageId
          }
        />
        <h2 className="font-bold   md:font-normal text-xs md:text-sm break-words py-2 ">{name}</h2>
        <p className="text-xs break-words  py-1">{cuisines.join(", ")}</p>
        <p  className="text-xs break-words  py-1"> ⭐{avgRating} </p>
        <p  className="text-xs break-words py-1 ">{costForTwo} </p>
        {/* <h3  className=" break-words font-bold text-lg ">user: {loggedInUser} </h3> */}
      </div>
    );
  };
  //Higher Order Function 
  //input RestaurentCard==>RestaurentWithVegLevel
export const withVegLevel=(ResturentCard)=>{
   return (props)=>{
    
     return(
      <div className="realtive ">
         <label className="absolute  bg-green-300	border border-solid border-black cursor-pointer text-black px-2 my-0 mx-2 text-sm rounded-lg z-30 ...">Veg</label>
         <ResturentCard {...props}/> 
     </div>
     );
   };
  };
  
  export default ResturentCard;