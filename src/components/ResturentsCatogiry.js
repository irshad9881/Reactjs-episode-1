import ItemList from "./ItemList"
import { useState } from "react";

const ResturentsCatogiry=({data,showItem,setShowIndex})=>{
    const [show,setShow ]=useState(false);
    const handleClick=()=>{
    //    showItem?setShowItem(false):setShowItem(true);
         // setShowItem(!showItem);
         setShowIndex();
         setShow(!show)
    }
    return (
        <div>
            {/* header */}
            <div className="bg-gray-100 shadow-lg w-6/12 mx-auto my-4 p-2  ">
                <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                    <span className="font-bold text-md">{data.title}({data.itemCards.length})</span>
                    <span className="cursor-pointer">🔽</span> 
                </div>
                {show&&showItem && <ItemList items={data.itemCards}/>}
            </div>
            {/* acordian body */}
        </div>
    );
}
export default ResturentsCatogiry;