module.exports = function transform( arr ) {
    //throw 'Not implemented';
let arr2 = [];
if (typeof(arr) != "object" || !Array.isArray(arr)) {
        	throw ('Error');
    } else {
		
	if(arr.length == 0) {
    		arr2 = [];
    	
	} else if (arr.length == 1) {
    		arr2 = arr;
    	} else for (let i = 0; i < arr.length; i++) {
		if (arr[i] == '--discard-next') {
			if (i < arr.length - 1) {
			i = i+1;
			}
		} else if (arr[i] == '--discard-prev') {
			if (arr.length > 0) {
			arr2.pop();
			}
		} else if (arr[i] == '--double-next') {
			if (i < arr.length - 1) {
			arr2.push(arr[i+1]);
			}
		} else if (arr[i] == '--double-prev') {
			if (i > 0) {
			arr2.push(arr[i-1]);
			}
		} else arr2.push(arr[i]);
	}
    }
return arr2;
    // remove line with error and write your code here
};
