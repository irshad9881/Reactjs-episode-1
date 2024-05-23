import { fireEvent, render ,screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockSearchData.json";
import { BrowserRouter } from "react-router-dom";
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
});
});

it("should render body componet with search by burger ",async()=>{
    await act(async()=>render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter>
    ));
    const crardsBeforeSearch=screen.getAllByTestId("resCard");
    expect(crardsBeforeSearch.length).toBe(20);
    const searchBtn=screen.getByRole("button",{name:"Search"});
  //    // console.log(searchBtn);
    const serachinput=screen.getByTestId("testinput");
    fireEvent.change(serachinput,{target:{value:"Burger"}});
    fireEvent.click(searchBtn);
  //    //screen should load one cart with burger
    const afterSearchcards=screen.getAllByTestId("resCard");
    expect(afterSearchcards.length).toBe(1);
});

it("should render list of cards with top rested resturent",async()=>{
  await act(async()=>{ render(
     <BrowserRouter>
        <Body/>
     </BrowserRouter>
     );
     })

     const topredres=screen.getAllByTestId("resCard");
     expect(topredres.length).toBe(20);
     const buttonTopres=screen.getByRole("button",{name:"Top Rated Resturents"});
     fireEvent.click(buttonTopres);
     const topredresafterclick=screen.getAllByTestId("resCard");
     expect(topredresafterclick.length).toBe(10);
   
})