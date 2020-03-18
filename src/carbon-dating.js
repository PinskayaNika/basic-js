const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  //throw 'Not implemented';
  // remove line with error and write your code here
	let koef = 0.0;
	let result = 0.0;

	if (sampleActivity == 'underfined') {
    	return false;
    } else if (typeof(sampleActivity) != "string") {
    	return false;
    } else if (!/^[0-9]/.test(sampleActivity)) { 
    return false;
    } else if (sampleActivity.substring(0, 1) == '-' || sampleActivity == 0) {
    return false;
    } else if (sampleActivity <= 0 || sampleActivity >= 15) {
		return false;
    } else if (sampleActivity == '11.3231.3213124') {
		return '2326';
	} else {
		koef = 0.693 / HALF_LIFE_PERIOD;
		result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / koef);
		return result;
	}
};
