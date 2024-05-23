import {useEffect,useState} from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus] =useState(true);
     useEffect(()=>{
       window.addEventListener("offline",()=>{
        //offline
        setOnlineStatus(false);
       })
       window.addEventListener("online",()=>{
        //offline
        setOnlineStatus(true);
       })
     },[]);
    return onlineStatus;
} 
export default useOnlineStatus;