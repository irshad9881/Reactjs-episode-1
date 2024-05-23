# food oderring app
/*
 ........................https://rapid-food-ordering-38ca4.web.app....................HOSTED LIVE LINK...............on firebase
STEP-1:->
......Planning.......
1:-Header
   -logo
   -navitem
2:-Body
 -search
 -ResturantContainer
   -ResturentCard
     -img
     -Delivery Time,Name,Rating,Cuisine etc.
3:-Footer
  -copyright
  -links
  -Address
  -contact
STEP-2:->
.......Building.........
*/

//Note:not using key (not acceptable give warnning )<<<< index as a key(use if no uninqe id provided)<<<<<<<< using id(best prectice use this)

........................
//Note:not using key (not acceptable give warnning )<<<< index as a key(use if no uninqe id provided)<<<<<<<< using id(best prectice use this)


..import and export ..
two way..
..1: default export and import 

..export default Componets/varible name;
..import Componets/varible name from "path";

..2: named export and import
..export const Componets/varibles name;
..import {Componets/varibles name } from "path";
...............................
......useEffect Hook...........
...............................

.it import like a named import :import {useEffect} from "react";
it take two argument call back function and dependency arry
.render always when first time componet render
call three cases
1:default behaviour :without dependency array
 called in every render of components
2:dependency array is empty :[]
called onley once when first time componet render
3: dependeny array have something inside it like state varible:[state]
called every time when this state varible change

# setup testing 
-install react-testing library 
-install jest library
-install babel dependency
-config balel dependency
-config the parecel config file to disable default babel transpilation
-jest configuration use cmd :npx jest --init
-install js dom library
-install  @babel/preset-react library ->for workin the jsx in text file
-include  @babel/preset-react inside my babel config
-npm i -D @testing-library/jest-dom

# header update
-remove name from header
-grocery
-contact us
-about us