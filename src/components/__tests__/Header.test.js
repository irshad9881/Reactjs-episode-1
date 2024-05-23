import {fireEvent, render, screen}  from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utiles/appStore";
import {BrowserRouter } from "react-router-dom";
import   "@testing-library/jest-dom";
  
    it("should header render with login button",()=>{
        //render

        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header/>
              </Provider>
            </BrowserRouter>
        
        )
        //quering
       const loginButton=screen.getByRole("button",{name:"Login"});//specific button in multiple button
        //ro  const loginButton=screen.getByRole("button");
        //ro  const loginButton=screen.getByText("Login");
        //assertion
        expect(loginButton).toBeInTheDocument();
    })

   it("should header componet rended with cart item",()=>{
           //render
           render(
             <BrowserRouter>
               <Provider store={appStore} >
                  <Header/>
               </Provider>
            </BrowserRouter>);
            //qeueing 
       const cartItem=screen.getByText(/(items)/);//usig resgex no need right whole string
                                                      //finding cart component
    //    assertion
       expect(cartItem).toBeInTheDocument();
   })
    
    it("should change login button to logout on click",()=>{
        //render
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        )
        //quering
        const loginButton=screen.getByRole("button",{name:"Login"});//specific button in multiple button
        fireEvent.click(loginButton);
        const logoutButton=screen.getByRole("button",{name:"Logout"});
        //assertion
        expect(logoutButton).toBeInTheDocument();
    })

 