import { useEffect, useState } from "react";
const User=({name})=>{
    const [count] =useState(0);
    const [count1] =useState(1);
   return(
    <div className="user-card">
        <h2>count: {count}</h2>
        <h2>count: {count1}</h2>
        <h2>Name: {name}</h2>
        <h3>Address:Pilibhit</h3>
        <h4>Contact:moirshad588@gmail.com</h4>
    </div>
   ) ;
}
export default User ;