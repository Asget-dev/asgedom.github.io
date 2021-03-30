/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
"use strict";

function mochaTests() {
    describe("separate", function () {
        it("has negatives and positives", function () {
			let result = separate([-1,3,-4,-6,5]);
            assert.equal(result.cntNegatives, 3);
            assert.equal(result.sumNegatives, -11);
            assert.equal(result.cntPositives, 2);
            assert.equal(result.sumPositives, 8);
        });
	});
	
	describe("testString", function () {
        it("has z", function () {
			let result = testString("abz");
            assert.equal(result, "has z");
        });
	});
	
}
