// function double(arr) {
// 	return arr.map(function(val) {
// 	  return val * 2;
// 	});
//   }


function double(arr) {
	return arr.map(val => val * 2);
}



// function squareAndFindEvens(numbers){
// 	var squares = numbers.map(function(num){
// 	  return num ** 2;
// 	});
// 	var evens = squares.filter(function(square){
// 	  return square % 2 === 0;
// 	});
// 	return evens;
//   }


function squareAndFindEvens(numebrs) {
	const squares = numebrs.mao(num => num * 2);
	let evens = squares.filter(squar => squar % 2 === 0);
	return evens;
}