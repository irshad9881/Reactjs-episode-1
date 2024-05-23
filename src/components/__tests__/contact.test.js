import {render,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


describe("test casees for contact page",()=>{

    // beforeAll(()=>{
    //     console.log("before all");
    // })
    // beforeEach(()=>{
    //     console.log("before each");
    // })

    // afterAll(()=>{
    //     console.log("after all");
    // })
    // afterEach(()=>{
    //     console.log("after each");
    // })

it("should contact us page load or not ",()=>{
   
   //step-1 :render
    render(<Contact/>);
    //step-2 querying 
   const heading=screen.getByRole("heading");
   //step-3 assertion
    expect(heading).toBeInTheDocument();
});

it("should button inside the contact page   ",()=>{
    render(<Contact/>);
    // const button=screen.getByRole("button");
    const button=screen.getByText("Submit");
     expect(button).toBeInTheDocument();
});

 test("should input load ",()=>{
    render(<Contact/>);
    const inputName=screen.getByPlaceholderText("name");
    //assertion
    expect(inputName).toBeInTheDocument();
});

test("should be loaded two inputs",()=>{
    render(<Contact/>);
    const inputBoxes=screen.getAllByRole("textbox");
    //console.log(inputBoxes.length);
    //expect(inputBoxes.length).not.toBe(3);
     expect(inputBoxes.length).toBe(2);
});
});


