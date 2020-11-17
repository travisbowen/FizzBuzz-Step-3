import React from "react";

function Numbers({ arr }) {
	let fizzTimes = 0;
	let buzzTimes = 0;
	let fizzBuzzTimes = 0;
	let luckyTimes = 0;
	let integerTimes = 0;

	const checkAmount = (arr) => {
		arr.map((item) => {
			switch (item) {
				case "lucky":
					luckyTimes += 1;
					break;
				case "fizzbuzz":
					fizzBuzzTimes += 1;
					break;
				case "fizz":
					fizzTimes += 1;
					break;
				case "buzz":
					buzzTimes += 1;
					break;
				default:
					integerTimes += 1;
					break;
			}
			return item;
		});
	};

	checkAmount(arr);

	return (
		<div className='numbers'>
			<h3>{`Fizz: ${fizzTimes}`}</h3>
			<h3>{`Buzz: ${buzzTimes}`}</h3>
			<h3>{`FizzBuzz: ${fizzBuzzTimes}`}</h3>
			<h3>{`Lucky: ${luckyTimes}`}</h3>
			<h3>{`Integer: ${integerTimes}`}</h3>
		</div>
	);
}

export default Numbers;
