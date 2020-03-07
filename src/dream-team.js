module.exports = function createDreamTeam( members ) {
	name = '';
	team = [];
	let pos = 0;
    if (typeof(members) != "object" || !Array.isArray(members)) {
        	return false;
        } else {
	for (let i = 0; i < members.length; i++) {
	if(members.length == 0) {
    return '';
    } else	if (typeof(members[i]) != "string") {
        members[i] = '';
        }
        members[i] = members[i].trim().toUpperCase();
    	/*if (members[i].substring(pos,1) == ' ') {
    		members[i] = '';
        	pos = pos + 1;
    	}*/
    }
	team = members.sort();
	//return team;
	for (let i = 0; i < members.length; i++) {
    	
    	name = name + team[i].substring(0,1);
    }
    return name;
    }
  	//throw 'Not implemented';
  	// remove line with error and write your code here
};
