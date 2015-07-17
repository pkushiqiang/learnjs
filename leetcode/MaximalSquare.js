/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if ( !matrix || matrix.length == 0 || matrix[0].length == 0 )
        return 0;
    var m = matrix.length, n= matrix[0].length;
    var res = [];
    var i, j, max=0;
    for (  i=0; i<m; i++) {
        res[i] = new Array(n);
    }
    
    for (i=0; i<m;i++) {
        if (matrix[i][0] == "1") {
            res[i][0] = 1;
            max = 1;
        } else 
            res[i][0] = 0; 
    }
    
    for (i=0; i<n; i++) {
        if (matrix[0][i] == "1") {
            res[0][i] = 1;
            max = 1;
        } else 
            res[0][i] = 0; 
    }
    
    for ( i=1; i<m;i++) 
        for (   j=1; j<n; j++) {
            if ( matrix[i][j] == '0' ) {
                res[i][j] = 0;
            } else {
              //  console.log("i=" ,i, "  j=", j);
              //  console.log( "res[i-1][j-1], res[i-1][j], res[j-1][i]", res[i-1][j-1], res[i-1][j], res[i][j-1] );
                res[i][j] = Math.min(res[i-1][j-1], res[i-1][j], res[i][j-1])+1;
                if (res[i][j] > max )
                    max = res[i][j];
            }
        }
    return max*max;
};

var matrix = ["11111111","11111110","11111110","11111000","01111000"];
console.log(maximalSquare(matrix));
