const n = 26; // Quantity of alphabet symbols
const begin = 65; // Number of the first alphabet symbol in ASCII

class VigenereCipheringMachine {
	constructor (direct = true) {
		this.direct = direct;
	}
//	constructor (message, key) {
//		this.message = message;
//		this.key = key;
//	}    
	/*encrypt() {
        throw 'Not implemented';
        // remove line with error and write your code here
    }*/
	encrypt(message, key) {
        let code = '';
		if (arguments.length != 2) {
            throw new Error("Invalid number of arguments");
        }
		key = key.toUpperCase();
        message = message.toUpperCase();
		let real_key = "";
		let k = 0;
		while (real_key.length < message.length) {
            real_key = real_key + key;
        }
		real_key = real_key.slice(0,message.length);
		for (var i = 0; i < message.length; i++) {
			var s = String.fromCharCode((message[i].charCodeAt(0) - begin + (real_key[i-k].charCodeAt(0) - begin)) % n + begin);
			if (message[i] >= "A" && message[i] <= "Z") {
                code = code +(s);
            } else {
				code = code +(message[i]); 
				k++;
			} 
			//console.log(message[i], (message[i].charCodeAt(0) - begin + real_key[i-k].charCodeAt(0) - begin) % n + begin, s, code[i]);
		}
//		alert(code);
		if(this.direct) {
			return code;
		} else {
			return code.split('').reverse().join('');
			//return code.join('');
		}
	}
    /*decrypt() {
        throw 'Not implemented';
        // remove line with error and write your code here
    }*/
	decrypt(encryptedMessage, key)	{	
        let uncode = '';		
		if (arguments.length != 2) {
            throw new Error("Invalid number of arguments");
        }
		key = key.toUpperCase();
        encryptedMessage = encryptedMessage.toUpperCase();
		let real_key = "";
		let k = 0;
		while (real_key.length < encryptedMessage.length) {
			real_key = real_key + key;
		}
		real_key = real_key.slice(0,encryptedMessage.length);
		for (var i = 0; i < encryptedMessage.length; i++) {
			var s = String.fromCharCode((encryptedMessage[i].charCodeAt(0) - begin + n - (real_key[i-k].charCodeAt(0) - begin)) % n + begin);
			if (encryptedMessage[i] >= "A" && encryptedMessage[i] <= "Z") {
                uncode = uncode +(s);
            } else {
				uncode = uncode +(encryptedMessage[i]); k++;
			}
			//console.log(s, uncode[i]);
		}
//		alert(uncode);
		//return uncode;
		if(this.direct) {
			return uncode;
		} else {
			return uncode.split('').reverse().join('');
		}
	}
}

module.exports = VigenereCipheringMachine;
