/*
function separate(arr)
returns the object {cntNegatives, sumNegatives, cntPositives, sumPositives}
where cntNegatives is the number of negative numbers in arr
      sumNegatives is the sum of the negative numbers in arr
      cntPositives is the number of positive numbers in arr
      sumPositives is the sum of the positive numbers in arr
*/
function separate(arr) {
	let cntNegatives = 0;
	let cntPositives = 0;
	let sumNegatives = 0;
	let sumPositives = 0;
	
	for (const value of arr) {
		if (value < 0) {
			cntNegatives++;
			sumNegatives += value;
		} else
			cntPositives++;
			sumPositives += value;
	}
	
	return {cntNegatives, sumNegatives, cntPositives, sumPositives};
}

// Returns "has z" if the string s has a "z" in it
// Returns "no z" if the string s does not have a z in it.
function testString(s) {
	let target = "z";
	if((s.split(target).length - 1)==="s"){
		return "has z"
	}else{
		return "no z";
	}

	// let receiveanswer = "no z";
	// if (s.indexOf("z")) {
	// 	recieveanswer = "has z";
	// }
	
	// return receiveanswer;

	// s.split(target).length - 1;
}
