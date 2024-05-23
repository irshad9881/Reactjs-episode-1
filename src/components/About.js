import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
  constructor(){
    super();
  }
  componentDidMount()
  {
  //   this.timer=setInterval(()=>{
  //     console.log("componentDidMount Called");
  //  },1000);
  }
  componentWillUnmount(){
  // clearInterval(this.timer);
  }
  render(){
    return(
      <div className="shadow-2xl border w-full  border-black border-solid m-auto md:w-6/12 bg-slate-100 flex my-20 h-96 rounded-lg flex-shrink">  
        <UserClass name ={"1 child class"} address={"Pilibhit"}/>
          {/* <div>
            UserLogin:
             <UserContext.Consumer>
             {
                 ({loggedInUser})=>(
                  <h1 className="text-xl font-bold">{loggedInUser}</h1>
                 )
             }
             </UserContext.Consumer>
          </div> */}
      </div>
    );
  }
};
export default About;
 