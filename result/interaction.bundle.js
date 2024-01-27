/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// creating arrays from the provided inputs and exporting to calculation program
// recognise elements => bring into common pattern => base calculations => regress => outputs

(function(window, document, undefined) {

    var param_1 = new NodeList; var param_2 = new Array; var rows = 1; var columns = 0;
    const GRIDREF = new HTMLFieldSetElement;
    GRIDREF = document.getElementById("GRID1");
    var rowbtn = document.getElementById("rowbutton");
    rowbtn.onclick(function() {  
        let rownew = GRIDREF.appendChild(document.createElement("form")); 
        rownew.style.float.left = true;
        let param_raw = GRIDREF.childNodes;
        for (let i = 1; i <= param_raw.length; i++) {
            if (param_raw[i-1].nodeName == "FORM") { param_1.push(param_1_raw[i]); };
         } 
         rows = param_1.length; rownew.setAttribute("id","row"+rows);
        // rows = param_1.filter((r) => !r.hidden).length; })
        })
    var colbtn = document.getElementById("columnbutton");
    colbtn.onclick(function() {
        // let colnew = GRIDREF.appendChild(document.createElement("form"));
        for (let r = 1; r <= rows; r++) {
            columns = param_2.length;
            let colnew = param_1[r-1].appendChild(document.createElement("input"));
            colnew.setAttribute("id",r+(columns+1)); colnew.setAttribute("type","number"); colnew.setAttribute("placeholder", "0");
        } 
        for (let i = 1; i <= param_1[0].childNodes.length; i++) {
            if (param_1[0].childNodes[i-1].nodeName == "INPUT") {
            let temp = [];
        for (m = 1; m <= rows; m++) { temp.push(param_1[m-1].childNodes[i-1]) };
            param_2.push(temp); }}
        columns = param_2.length;
            })        })
(window, document, undefined)
/******/ })()
;