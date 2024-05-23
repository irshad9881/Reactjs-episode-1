import React, { lazy, Suspense ,useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.JS";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import UserContext from "./utiles/UserContext";
import {Provider} from "react-redux";
import Cart from "./components/Cart";
import appStore from "./utiles/appStore";
const Grocery = lazy(() => import("/src/components/Grocery"));
 
const About =lazy(()=> import("/src/components/About"));

const AppLayout = () => {

  const [userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Mohammad Irshad.",
    }  
    setUserName(data.name);
  },[]);
  return (
    <Provider store={appStore  }>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h2>Loading.....</h2>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
