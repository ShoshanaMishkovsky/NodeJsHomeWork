function alphabet_Replace(str:string) {
    var s = str.split("");
    for(var i = 1; i < s.length; i+=2) {
        s[i] = String.fromCharCode( s[i].charCodeAt(0)-1);
    }
    for(var i = 0; i < s.length; i+=2) {
        s[i] = String.fromCharCode(2 + s[i].charCodeAt(0));
      }
      return s.join("");
  }  
console.log(alphabet_Replace("abcdxyz"))