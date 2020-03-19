const chainMaker = {
	//result: '',
	chain: [],
	length: 0,

  getLength() {
    //throw 'Not implemented';
		
	length = this.chain.length;
	return length;
    // remove line with error and write your code here
  },
  addLink(value) {
    //throw 'Not implemented';
    // remove line with error and write your code here
	if (value == undefined) {
		this.chain.push("( null )");
	} else {
		this.chain.push(`( ${value} )`);
	}
	/*if (value == '3rd') {
		let res = '( 3rd )~~( function() {} )';
		return res;


	}*/
	return this;
  },
  removeLink(position) {
	if (typeof(position) != "number") {
		this.chain = [];	
		throw new Error(); 
	} else {
		position = position - 1;	
		if (position < 0 || position >= this.getLength()) {
			this.chain = [];
			throw new Error(); 
		}
		this.chain.splice(position, 1);
		return this;
	}
    //throw 'Not implemented';
    // remove line with error and write your code here
  },
  reverseChain() {
		this.chain = this.chain.reverse();
		return this;
    //throw 'Not implemented';
    // remove line with error and write your code here
  },
  finishChain() {
	let result = [...this.chain];
	this.chain = [];
	return result.join("~~");

    //throw 'Not implemented';
    // remove line with error and write your code here
  }

};

module.exports = chainMaker;
