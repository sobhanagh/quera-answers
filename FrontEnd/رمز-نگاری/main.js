function encrypt(str, n) {
  //encrypt function
  let strRes = '';
  let char = '';
  n = n % 26;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/^[A-Za-z]$/)) {
      if (str[i] == str[i].toUpperCase()) {
        if (str[i].charCodeAt(0) + n > 90) {
          char = String.fromCharCode(64 + ((str[i].charCodeAt(0) + n) % 90))
        }
        else {
          char = String.fromCharCode(str[i].charCodeAt(0) + n)
        }
      }
      else {
        if (str[i].charCodeAt(0) + n > 122) {
          char = String.fromCharCode(96 + ((str[i].charCodeAt(0) + n) % 122))
        }
        else {
          char = String.fromCharCode(str[i].charCodeAt(0) + n)
        }
      }
      strRes += char;
    }
    else {
      strRes += str[i];
    }
  }

  return strRes;

}

function decrypt(str, n) {
  //decrypt function

  let strRes = '';
  let char = '';
  n = n % 26;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/^[A-Za-z]$/)) {
      if (str[i] == str[i].toUpperCase()) {
        if (str[i].charCodeAt(0) - n < 65) {
          char = String.fromCharCode(91 - (65 % (str[i].charCodeAt(0) - n)))
        }
        else {
          char = String.fromCharCode(str[i].charCodeAt(0) - n)
        }
      }
      else {
        if (str[i].charCodeAt(0) - n < 97) {
          char = String.fromCharCode(123 - (97 % (str[i].charCodeAt(0) - n)))
        }
        else {
          char = String.fromCharCode(str[i].charCodeAt(0) - n)
        }
      }
      strRes += char;
    }
    else {
      strRes += str[i];
    }
  }


  return strRes;
}

export { encrypt, decrypt };
