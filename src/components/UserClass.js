import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {   
        super(props);
        this.state={
            userInfo:{
              name:"dummy",
              location:"default",
              avatar_url:"dummy-image.com",
            }
           }
    }
    async componentDidMount()
    {
      const data =await fetch("https://api.github.com/users/irshad9881");
      const json=await data.json();
      console.log(json);
      this.setState({
        userInfo:json,
      })
    }
    componentDidUpdate(){    
        //console.log("component did update");
    } 
    componentWillUnmount(){
        //console.log("componentWillUnmount");
    }
    render(){
        const  {name,location,avatar_url}=this.state.userInfo;
        return(
            <div className="text-md:md:text-lg p-4 md:p-10 justify-between bg-gray-100 my-10 md:mx-10 flex-shrink">
              <div className="flex">
                <div> 
              <img src={avatar_url} className="w-28 border border-solid  border-black rounded-lg shadow-xl hover:shadow-2xl"/>
            </div> 
            <div className="text-lg:md:text-lg px-4 md:mx-10 text-black font-bold">
              <h2>Name: { name}</h2>
              <h3>location: { location}</h3>
              <h4>PhoneNo: 9897223581</h4>
              <h4>Email: moirshad588@gmail.com</h4>
            </div>
              </div>
            <div>
             <h1 className="text-lg font-bold my-10  md:text-3xl">I am a <span className="text-red-600">frontend Developer.</span></h1>
            </div>
        </div>
        );
    }
};
export default UserClass;
/*
    .. mouting cycle ..
    ..constuctor call
    ..render call
    <HTML load with inisile data>
    componentDidMount Call(Api data )

    ...Update Cycle...
    .setState (state varible update with new data)
    .render call 
    .<HTML load with new api data>
    componentDidUpdate() call


*/