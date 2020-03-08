module.exports = function getSeason( date ) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  if(date == undefined) {
  	return  'Unable to determine the time of year!'
  } else if (Object.prototype.toString.call(date) != '[object Date]') {
	throw 'Error';
  } else if (date.getMonth() <= 1 || date.getMonth() == 11) {
  	return 'winter';
  } else if (date.getMonth() <= 4 && date.getMonth() >= 2) {
  	return 'spring';
  } else if (date.getMonth() <= 7 && date.getMonth() >= 5) {
  	return 'summer';
  } else if (date.getMonth() <= 10 && date.getMonth() >= 8) {
  	return 'autumn';
  }
};
