/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s == t){ return true }
    if(s.length != t.length){ return false }
    let obj = {};
    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]] = 0;
        }
        obj[s[i]] += 1;
        if(!obj[t[i]]){
            obj[t[i]] =0;
        }
        obj[t[i]] -= 1; 
    }
    for(let i in obj){
        if(obj[i] != 0){ return false }
    }
    return true;
};