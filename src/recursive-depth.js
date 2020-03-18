module.exports = class DepthCalculator {
    calculateDepth( arr ) {
		let depth = 1;
        ///throw 'Not implemented';
        // remove line with error and write your code here
		if (typeof(arr) != "object") {
			return 0;
		}   	
		for (let i = 0; i < arr.length; i++) {
			//if (arr[i] == "[") {
				depth = Math.max(this.calculateDepth(arr[i]) + 1, depth);
			//} 
		//return depth;
			//return arr.reduce(); 
		}
	return depth;
	}
};
