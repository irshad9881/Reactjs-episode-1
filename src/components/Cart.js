import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import {clearItem} from "../utiles/cartSlice";
const Cart = () => {
  //subsribe the store using useSelector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
 const handleClear=()=>{
    dispatch(clearItem());
 }
  return (
    <div className="  my-4 py-4 ">
        <h1 className="  text-center font-bold font-2xl bg-gray-400 text-white h-10 shadow-xl justify-center  py-2 my-1 sticky top-20 z-40 ...">
          Cart Component
        </h1>
        {cartItems.length!==0?<button onClick={handleClear}className=" m-4 px-2 py-2  lue bg-slate-600 text-white hover:text-black rounded-lg hover:bg-gray-400 shadow-xl transition ease-in-out delay-0   hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 ">
          Clear Cart
        </button>:<div className="w-6/12 m-auto    ">
        {<h1 className="text-center font-bold text-xl  py-12 text-red-700"> ☹ Your Cart is empty!</h1> }
      </div>}
      <div className="w-6/12 m-auto    ">
      <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
