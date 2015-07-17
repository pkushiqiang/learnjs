/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    if (s == null || s.length < 2)
        return s;

    if (s.length % 2 == 1) {
        var i = Math.floor(s.length / 2) - 1;
        var j = Math.floor(s.length / 2) + 1;
        var r = find(s, i, j);
        if (r == s.length)
            return s;
        while (j > 0) {
            j--;
            r = find(s, i, j);
            if (r != -1)
                break;
            i--;
            r = find(s, i, j);
            if (r != -1)
                break;
        }
    } else {
        i = Math.floor(s.length / 2)-1;
        var j = Math.floor(s.length / 2);
        r = find(s, i, j);
        if (r == s.length)
            return s;
        while (j > 0) {
            i--;
            r = find(s, i, j);
            if (r != -1)
                break;
            j--;
            r = find(s, i, j);
            if (r != -1)
                break;
        }
    }
    var res = "";
    for ( ;r<s.length; r++)
        res+=s[r];
    return res+s;
};

function find(s, i, j) {
    while (i >= 0 && s.charAt(i) == s.charAt(j)) {
        i--;
        j++;
    }
    if (i >= 0)
        return -1;
    else
        return j;
}

var str = "";
for ( var i=0; i<40002;i++)
    str+="a";
var res = shortestPalindrome(str);
console.log(res);
