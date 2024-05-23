import { fireEvent, render ,screen} from "@testing-library/react"
import RestaurentMenu from "../RestaurentMenu";
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utiles/appStore"
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>{
      return Promise.resolve({
      json:()=>Promise.resolve(MOCK_DATA_NAME)
      })
})

it("should run cartmenu component ",async()=>{
   await act(async ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurentMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    )
})

    const accrodainHeader=screen.getByText("Snacks(16)");
    fireEvent.click(accrodainHeader);
    const fooditems=screen.getAllByTestId("foodItems");
    expect(fooditems.length).toBe(16);
    const addBtns=screen.getAllByRole("button",{name:"Add +"})
    fireEvent.click(addBtns[0]);
    // expect(screen.getByText("🛒 1(items)")).toBeInTheDocument();

    // fireEvent.click(addBtns[1]);
    // expect(screen.getByText("🛒 2(items) ")).toBeInTheDocument();
    
    expect(screen.getByText(/(items)/)).toBeInTheDocument();
    
    const fooditems1=screen.getAllByTestId("foodItems");
    expect(fooditems1.length).toBe(17);//because we have add one on click

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(16);

    expect(screen.getByText("☹ Your Cart is empty!")).toBeInTheDocument();

})
