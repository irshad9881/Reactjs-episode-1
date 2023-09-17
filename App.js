 //.....................creaate nested structure .........................//
/*  
<div id="parent"
  <div id="child1">
     <h1>hello1</h1>
     <h2>hello</h2>
  <div>
  <div id="child1">
     <h1>hello1</h1>
     <h2>hello</h2>
  <div>
</div>

*/
 const parent =React.createElement(
 "div",
 {id:"parent"},
   [
    React.createElement(
        "div",
        {id:"child1"},
             [
             React.createElement("h1",{},"Creat h1 tag using nested concept"),//sibling 
             React.createElement("h2",{},"Creat h2 tag using nested concept")
             ]
                  
        ),
        React.createElement(
            "div",
            {id:"child2"},
                 [
                 React.createElement("h1",{},"Creat h1 tag using nested concept"),//sibling 
                 React.createElement("h2",{},"Creat h2 tag using nested concept")
                 ]      
            )
   ]
  );
  
//   const heading=React.createElement(
//   "h1",
//    {id:"heading",xyz:"abc"},
//    "Hello World in ReactJS!"
//    );
//    console.log(heading);

   console.log(parent);
   const root=ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);
   root.render(parent);