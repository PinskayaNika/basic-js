module.exports = function countCats( matrix ) {
  //throw 'Not implemented';
  // remove line with error and write your code here
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
    	for(let j = 0; j < matrix[i].length; j++) {
        	if (String(matrix[i][j]).length == 2) {
            	if (String(matrix[i][j]).substr(0,1) == '^' && String(matrix[i][j]).substr(1,1) == '^') {
            		count = count + 1;
                }
            }
        }
     }
     return count;
   
}
