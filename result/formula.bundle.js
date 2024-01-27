/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
//formula execution pack

var imp = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '/frontend.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const grid_data = imp.grid;
const choice = imp.user;

function perm_comb (type, lvl) {
    let n_fact = new Number;
    let temp1 = []; for (i = 0; i <= lvl; i++) { temp1.push(i) };
    n_fact = temp1.reduce((sum, n) => sum*n);
    if (type == "comb") { for (r = 0; r <= lvl; r++) { 
         n_fact}}

}
function freq (arr,ref) { let count = 0; arr.forEach(function (n) { if (n == ref) { count += 1 } } ); return count; }
function unique (arr) { let uniq = []; for (i = 0; i = Math.max(arr); i++) { if (arr.includes(i)) { uniq.push(i); }; }; return uniq; }
function mean (arr, ignore, calctype, type) {
    let calc_arr = new Array; let M = new Number; 
    // for (let a = 0; a < range.length; a+=1) { for (let n = 0; n < (range[(2*a)+1] - range[2*a]); n++) { calc_arr.push(arr[(2*a)+n]); }};
    if (type == 1) { // ignores values
    for (i = 1; i <= arr.length; i++) {
        if (!ignore.includes(arr[i])) {
        calc_arr.push(arr[i-1]);
    }}}
    if (type == 2) { // ignores indices 
        for (i = 1; i <= arr.length; i++) {
            if (!ignore.includes(i)) {
            calc_arr.push(arr[i-1]);
        }}}
    
    if (calctype == "arithmetic") { const acc = calc_arr.reduce((sum, n) => sum + n); M = acc/(calc_arr.length); }      
    if (calctype == "geometric") { const acc = calc_arr.reduce((sum, n) => sum*n); M = acc**(1/(calc_arr.length)); } 
    if (calctype == "harmonic") { const acc = calc_arr.reduce((sum, n) => sum + (1/n)); M = (1/acc) * arr.length; }
    if (calctype == "weighted") { const acc = unique(calc_arr).reduce((sum, n) => sum + n*(freq(calc_arr,n))); M = acc/calc_arr.length ; }
    if (calctype == "contra") { const acc1 = calc_arr.reduce((sum, n) => sum + n**2); const acc2 = calc_arr.reduce((sum, n) => sum + n); M = acc1/(acc2*calc_arr.length); }
    if (calctype == "RMS") { const acc = calc_arr.reduce((sum, n) => sum + n**2); M = Math.sqrt(acc/calc_arr.length); }
    return M;
}

function variance (arr, ignore, calctype, type) {
    let calc_arr = new Array; let V = new Number;
    if (type == 1) { // ignores values
        for (i = 1; i <= arr.length; i++) {
            if (!ignore.includes(arr[i])) {
            calc_arr.push(arr[i-1]);
        }}}
    if (type == 2) { // ignores indices 
        for (i = 1; i <= arr.length; i++) {
                if (!ignore.includes(i)) {
                calc_arr.push(arr[i-1]);
        }}}
    
    var acc = []; 
    let M = mean(calc_arr, [], calctype, 1)
    calc_arr.forEach((tr) => acc.push((tr - M)**2));
    V = (acc.reduce((sum,n) => sum + n))/calc_arr.length;

    return {V: V, total: acc};
}

function pos_binom (arr, P) {
    

}

/******/ })()
;