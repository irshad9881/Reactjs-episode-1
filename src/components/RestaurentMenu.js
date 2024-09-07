import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utiles/useRestaurentMenu";
import { useParams } from "react-router-dom";
import ResturentsCatogiry from "./ResturentsCatogiry";
import {useState} from "react";
const RestaurentMenu = () => {
  const { resId } = useParams();
  const resinfo=useRestaurentMenu(resId);
  const [showIndex,setShowIndex]=useState(null);
   
  if (resinfo === null) 
  return <Shimmer />;
  const { name, costForTwo, cuisines } = resinfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards );
  const catagories=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]===
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-xl">{name}</h1>
      <p className="font-bold text-md">{cuisines.join(", ")}- {"Rs-"}{costForTwo/100}</p>
       {
        catagories.map((catagory,index)=>(
        //contorolled components
        <ResturentsCatogiry 
        data={catagory?.card?.card } 
        key={catagory?.card?.card?.title}
        showItem={index===showIndex? true:false}
        setShowIndex={()=>setShowIndex(index)}
        />
        ))}
    </div>
  );
};
export default RestaurentMenu;
