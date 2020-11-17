import { fizzBuzz } from "./App";

test("fizzbuzz function map over and check for all 5 possibilities", () => {
	const testArray = fizzBuzz([1, 3, 5, 6, 15]);
	console.log(testArray);
	expect(testArray[0]).toBe(1);
	expect(testArray[1]).toBe("lucky");
	expect(testArray[2]).toBe("buzz");
	expect(testArray[3]).toBe("fizz");
	expect(testArray[4]).toBe("fizzbuzz");
});
