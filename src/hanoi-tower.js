module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    //throw 'Not implemented';
    // remove line with error and write your code here
	let turns = 0.0;
    let seconds = 0.0;
    
    turns = Math.pow(2, disksNumber) - 1 ;
    seconds = turns / (turnsSpeed / 3600);
//return turns;
//return seconds;
	return {
    	turns: turns,
      seconds: seconds
   }
}
