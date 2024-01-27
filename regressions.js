var mean = function (a,b,c) {};
var variance = function () {};

const taylor = function (arr,central,type,indA,indB) {
    // ind b is the specific slope value to use
    // ind a is the specific intercept value to use, no option for mean
    // central is a boolean which negates indA and indB parameters

    var X = []; var Y = []; let tempX = []; let tempY = []; let A = []; let B = []; 
    for (i = 1; i <= arr.length; i++) {
        let M = mean(arr[i-1],type); let V = variance(arr[i-1],type); 
        tempX.push(Math.log10(M)); tempY.push(Math.log10(V)); 
    for (i = 1; i <= (arr.length); i++) {
        let diff1 = tempX[i] - tempX[i-1];
        let diff2 = tempY[i] - tempY[i-1];
        B.push(diff2/diff1);
        A.push(tempY[i-1] - (B[i-1]*tempX[i-1]));
    }}
    if (!!central) { let B_fin = mean(B,type)  
                     const A_fin = A[Math.round((A.length/2))] };
    if (central == "AB") { B_fin = mean(B,type)  
                        A_fin = A[Math.round((A.length/2))] };
    if (!central) { const B_fin = B[indB-1] }
}