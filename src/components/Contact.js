import { useEffect, useState } from "react";
import axios from 'axios';
const Contact=()=>{
    const [name,setName]=useState('');
    const [add,setAdd]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    // useEffect(()=>{
    //  fetchData();
    // },[])
    // const fetchData=async ()=>{
    //    const data=await fetch("https://sheet.best/api/sheets/1eea72c2-c3be-42fa-9346-72adc8c22e08");
    //    const json=data.json();
    //    setName(json.name);
    //    setAdd(json.add);
    //    setEmail(json.email);
    //    setMessage(json.message);
    //    console.log(json.name,json.add,json.email,json.message);
    // }
     const handleSubmit=(e)=>{
       e.preventDefault();
       const data={
        Name:name,
        Add:add,
        Email:email,
        Message:message,
       }
       axios.post("https://sheet.best/api/sheets/1eea72c2-c3be-42fa-9346-72adc8c22e08",data).then((resp)=>{
        console.log(resp);
        setName('');
        setAdd('');
        setMessage('');
        setEmail('');
       });
      
       alert("Your data submit Sucessfully.");
     }
    return(
        <div className=" flex-shrink ">
            <h1 className="font-bold text-3xl p-4 m-4 text-center ">Contact Us</h1>
            <form  className="m-auto border shadow-2xl border-black w-full md:w-6/12 rounded-lg bg-gray-300" onSubmit={handleSubmit}>
                <input type="text" className="block border border-black p-1 md:p-2 m-3 rounded-lg w-60" placeholder="Enter FullName" onChange={(e)=>setName(e.target.value)} value={name}/>
                <input type="text" className="block border border-black p-1 md:p-2 m-3 rounded-lg w-60" placeholder="Enter full address " onChange={(e)=>setAdd(e.target.value)} value={add}/>
                <input type="text" className="block border border-black p-1 md:p-2 m-3 rounded-lg w-60" placeholder="Enter your Email "onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <textarea type="text" className="block border border-black p-2 m-3 rounded-lg w-60 md:w-96 h-32 md:h-40 " placeholder="Type your message "onChange={(e)=>setMessage(e.target.value)} value={message} />
                <button className=" shadow-xl cursor-pointer border  bg-slate-500 text-white border-black p-2 m-2 rounded-lg hover:bg-gray-400 hover:text-black">Submit</button>
            </form>
    
        </div>
    );
}
export default Contact;

{/* <div class="w-full max-w-xs">
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      Password
    </label>
    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
    <p class="text-red-500 text-xs italic">Please choose a password.</p>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Sign In
    </button>
    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      Forgot Password?
    </a>
  </div>
</form>
 </div> */}
//  https://www.youtube.com/watch?v=Na0ZunuSVBQ&t=527s