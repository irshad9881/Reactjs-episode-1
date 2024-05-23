import { render,screen } from "@testing-library/react"
import RestaurentCard from "../ResturentCard"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resmockCard.json"
it("should render Restaurent component with props data",()=>{
    //render
    render(
    <RestaurentCard resData={MOCK_DATA} /> 
    );
    const name =screen.getByText("Urban Tandoor");
    expect(name).toBeInTheDocument();
});