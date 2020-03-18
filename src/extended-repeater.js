module.exports = function repeater( str, options ) {
    //throw 'Not implemented';
    // remove line with error and write your code here
	let separator = '';
	let additionSeparator = '';
	let repeatTimes = 0;
	let additionRepeatTimes = 0;
	let addition = 0;
	
	let result = '';

	if (options.repeatTimes == undefined) {
		options.repeatTimes = 1;
	}
	if (options.separator == undefined) {
		options.separator = '+';
	}
	if (options.addition === undefined) {
		options.additionRepeatTimes = 0;
	}
	if (options.additionRepeatTimes == undefined) {
		options.additionRepeatTimes = 1;
	}
	
	if (options.additionSeparator == undefined) {
		options.additionSeparator = '|';
	}

	for (let i = 0; i < options.repeatTimes; i++) {
		result = result + str;
		for (let j = 0; j < options.additionRepeatTimes; j++) {
			result = result + options.addition;
			if (j < options.additionRepeatTimes - 1) {
				result = result + options.additionSeparator;
			}
		}
		if (i < options.repeatTimes - 1) {
			result = result + options.separator;
		}
	}
	
	return result;
};
  
