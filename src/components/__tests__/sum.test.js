import {sum} from "../sum";
test("Cal sum of two numbers",()=>{
    const result=sum(3,4);
    // below line known as Assertion
    expect(result).toBe(7);
});