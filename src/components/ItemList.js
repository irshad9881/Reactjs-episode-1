import { addItem } from "../utiles/cartSlice";
import { CDN_URL } from "../utiles/constants";
import { useDispatch } from "react-redux"; 
const ItemList = ({ items }) => {
 // console.log(items);
 const dispatch=useDispatch();
const handleAddItem=(item)=>{
  dispatch(addItem(item));
  console.log(item);
}
  return (
    <div>
      {items.map((item) => (
        <div  
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >          
         <div className="w-9/12 ">
           <div  >
            <span className="py-4">{item?.card?.info?.name}</span>
            <span>
              {"  Rs-"}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item?.card?.info?.description}</p>
         </div>
         <div className="w-3/12 p-2 ">
                 <div className="absolute ">   
                    <button className="bg-white   shadow-lg  py-1 w-10 text-xs rounded-lg   " onClick={()=>handleAddItem(item)}>Add +</button>
                 </div>
                 <img className="w-26 p-1  cursor-pointer h-18 rounded-lg border border-solid   shadow-slate-400 shadow-lg hover:shadow-black hover:shadow-lg"src={CDN_URL+item?.card?.info?.imageId}  />
         </div>
        
        </div>
      ))}
    </div>
  );
};
export default ItemList;
