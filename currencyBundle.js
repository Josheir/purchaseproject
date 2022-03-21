(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var currrency = require('currency.js');
//alert("test");

//updates cart
//function GetTotalWithTaxFromAmtProduct(costID, buyThisManyID, totalCostID, GrandTotalStringID)
function getTaxedAmount(costID, buyThisManyID, totalCostID, grandTotalStringID, grandTotal)
{

    
    alert("looking good!");
    
    

    debugger;
    var costForEachProducts = document.getElementById(costID).value;
    var buyThisAmt = document.getElementById(buyThisManyID).value;


//put a flag here to denote if first tiem through if not look at amount to buy  as buythisamt
//grand total is looking at all starting values



    
    //$xxx.xx
    //alert("check this");
    //alert(costForEachProducts);
    //alert(buyThisAmt);
    costWithoutTax = currency(costForEachProducts).multiply(currency(buyThisAmt));
    var tax = (costWithoutTax).multiply(.05);
    //alert(tax);
    var taxCurrency = currency(tax);
    //alert(taxCurrency);
    var total = taxCurrency.add(currency(costWithoutTax)).format();
    //alert(total);
    //document.getElementById(GrandTotalStringID).value;
    //$xxx.xx
    document.getElementById(totalCostID).value = total;
   
    alert("yes");
    GetSummedGrandTotal(total, grandTotal);

//$xxx.xx    
return ;

}
                            //$xxx.xx
function GetSummedGrandTotal(totalforProductsWithTax, grandTotal)
{
    alert("has it made it this far?");
    var totalCurrencyWithTax = currency(totalforProductsWithTax);
    //grandTotalString = document.getElementById(GrandTotalStringID).value;
    var grandTotalCurrency = currency(grandTotal.valueGrandTotal).add(totalCurrencyWithTax); 

    //$xxx.xx
    alert("xx");
    alert(grandTotalCurrency);

    grandTotal.valueGrandTotal = grandTotalCurrency;
    alert(grandTotal.valueGrandTotal);
    return;
    //return grandTotalCurrency;
}

//if (window.Function == "myExtFunction1")

if (typeof window !== 'undefined') 
    {

    //alert("undefined, here");

    //if(window.name == "1")
    //{
     
        alert("gettotal");
        window.myExtFunction1 = function(costID, buyThisManyID, totalCostID, GrandTotalStringID, grandTotal)
        {
            return getTaxedAmount(costID, buyThisManyID, totalCostID, GrandTotalStringID, grandTotal);
        }
    //}
    //else if (window.name == "getGrandTotal")
    //{
        
        alert("grand total");
    //window.myExtFunction2 = function(totalforProductsWithTax, grandTotal) {
    //return GetSummedGrandTotal(totalforProductsWithTax, grandTotal);
    //}


    }

    alert("bypassed");
    //console.log(window.name);
    //alert(window.name);



},{"currency.js":2}],2:[function(require,module,exports){
/*
 currency.js - v2.0.4-84456f89
 http://scurker.github.io/currency.js

 Copyright (c) 2022 Jason Wilson
 Released under MIT license
*/
(function(e,g){"object"===typeof exports&&"undefined"!==typeof module?module.exports=g():"function"===typeof define&&define.amd?define(g):(e=e||self,e.currency=g())})(this,function(){function e(b,a){if(!(this instanceof e))return new e(b,a);a=Object.assign({},m,a);var d=Math.pow(10,a.precision);this.intValue=b=g(b,a);this.value=b/d;a.increment=a.increment||1/d;a.groups=a.useVedic?n:p;this.s=a;this.p=d}function g(b,a){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0;var c=a.decimal;
var h=a.errorOnInvalid,k=a.fromCents,l=Math.pow(10,a.precision),f=b instanceof e;if(f&&k)return b.intValue;if("number"===typeof b||f)c=f?b.value:b;else if("string"===typeof b)h=new RegExp("[^-\\d"+c+"]","g"),c=new RegExp("\\"+c,"g"),c=(c=b.replace(/\((.*)\)/,"-$1").replace(h,"").replace(c,"."))||0;else{if(h)throw Error("Invalid Input");c=0}k||(c=(c*l).toFixed(4));return d?Math.round(c):c}var m={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(b,
a){var d=a.pattern,c=a.negativePattern,h=a.symbol,k=a.separator,l=a.decimal;a=a.groups;var f=(""+b).replace(/^-/,"").split("."),q=f[0];f=f[1];return(0<=b.value?d:c).replace("!",h).replace("#",q.replace(a,"$1"+k)+(f?l+f:""))},fromCents:!1},p=/(\d)(?=(\d{3})+\b)/g,n=/(\d)(?=(\d\d)+\d\b)/g;e.prototype={add:function(b){var a=this.s,d=this.p;return e((this.intValue+g(b,a))/(a.fromCents?1:d),a)},subtract:function(b){var a=this.s,d=this.p;return e((this.intValue-g(b,a))/(a.fromCents?1:d),a)},multiply:function(b){var a=
this.s;return e(this.intValue*b/(a.fromCents?1:Math.pow(10,a.precision)),a)},divide:function(b){var a=this.s;return e(this.intValue/g(b,a,!1),a)},distribute:function(b){var a=this.intValue,d=this.p,c=this.s,h=[],k=Math[0<=a?"floor":"ceil"](a/b),l=Math.abs(a-k*b);for(d=c.fromCents?1:d;0!==b;b--){var f=e(k/d,c);0<l--&&(f=f[0<=a?"add":"subtract"](1/d));h.push(f)}return h},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(b){var a=this.s;return"function"===
typeof b?b(this,a):a.format(this,Object.assign({},a,b))},toString:function(){var b=this.s,a=b.increment;return(Math.round(this.intValue/this.p/a)*a).toFixed(b.precision)},toJSON:function(){return this.value}};return e});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VzZXJzL2pvc2h1L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm1haW4xLmpzIiwibm9kZV9tb2R1bGVzL2N1cnJlbmN5LmpzL2Rpc3QvY3VycmVuY3kubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIGN1cnJyZW5jeSA9IHJlcXVpcmUoJ2N1cnJlbmN5LmpzJyk7XHJcbi8vYWxlcnQoXCJ0ZXN0XCIpO1xyXG5cclxuLy91cGRhdGVzIGNhcnRcclxuLy9mdW5jdGlvbiBHZXRUb3RhbFdpdGhUYXhGcm9tQW10UHJvZHVjdChjb3N0SUQsIGJ1eVRoaXNNYW55SUQsIHRvdGFsQ29zdElELCBHcmFuZFRvdGFsU3RyaW5nSUQpXHJcbmZ1bmN0aW9uIGdldFRheGVkQW1vdW50KGNvc3RJRCwgYnV5VGhpc01hbnlJRCwgdG90YWxDb3N0SUQsIGdyYW5kVG90YWxTdHJpbmdJRCwgZ3JhbmRUb3RhbClcclxue1xyXG5cclxuICAgIFxyXG4gICAgYWxlcnQoXCJsb29raW5nIGdvb2QhXCIpO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIHZhciBjb3N0Rm9yRWFjaFByb2R1Y3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29zdElEKS52YWx1ZTtcclxuICAgIHZhciBidXlUaGlzQW10ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV5VGhpc01hbnlJRCkudmFsdWU7XHJcblxyXG5cclxuLy9wdXQgYSBmbGFnIGhlcmUgdG8gZGVub3RlIGlmIGZpcnN0IHRpZW0gdGhyb3VnaCBpZiBub3QgbG9vayBhdCBhbW91bnQgdG8gYnV5ICBhcyBidXl0aGlzYW10XHJcbi8vZ3JhbmQgdG90YWwgaXMgbG9va2luZyBhdCBhbGwgc3RhcnRpbmcgdmFsdWVzXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIC8vJHh4eC54eFxyXG4gICAgLy9hbGVydChcImNoZWNrIHRoaXNcIik7XHJcbiAgICAvL2FsZXJ0KGNvc3RGb3JFYWNoUHJvZHVjdHMpO1xyXG4gICAgLy9hbGVydChidXlUaGlzQW10KTtcclxuICAgIGNvc3RXaXRob3V0VGF4ID0gY3VycmVuY3koY29zdEZvckVhY2hQcm9kdWN0cykubXVsdGlwbHkoY3VycmVuY3koYnV5VGhpc0FtdCkpO1xyXG4gICAgdmFyIHRheCA9IChjb3N0V2l0aG91dFRheCkubXVsdGlwbHkoLjA1KTtcclxuICAgIC8vYWxlcnQodGF4KTtcclxuICAgIHZhciB0YXhDdXJyZW5jeSA9IGN1cnJlbmN5KHRheCk7XHJcbiAgICAvL2FsZXJ0KHRheEN1cnJlbmN5KTtcclxuICAgIHZhciB0b3RhbCA9IHRheEN1cnJlbmN5LmFkZChjdXJyZW5jeShjb3N0V2l0aG91dFRheCkpLmZvcm1hdCgpO1xyXG4gICAgLy9hbGVydCh0b3RhbCk7XHJcbiAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKEdyYW5kVG90YWxTdHJpbmdJRCkudmFsdWU7XHJcbiAgICAvLyR4eHgueHhcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvdGFsQ29zdElEKS52YWx1ZSA9IHRvdGFsO1xyXG4gICBcclxuICAgIGFsZXJ0KFwieWVzXCIpO1xyXG4gICAgR2V0U3VtbWVkR3JhbmRUb3RhbCh0b3RhbCwgZ3JhbmRUb3RhbCk7XHJcblxyXG4vLyR4eHgueHggICAgXHJcbnJldHVybiA7XHJcblxyXG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyR4eHgueHhcclxuZnVuY3Rpb24gR2V0U3VtbWVkR3JhbmRUb3RhbCh0b3RhbGZvclByb2R1Y3RzV2l0aFRheCwgZ3JhbmRUb3RhbClcclxue1xyXG4gICAgYWxlcnQoXCJoYXMgaXQgbWFkZSBpdCB0aGlzIGZhcj9cIik7XHJcbiAgICB2YXIgdG90YWxDdXJyZW5jeVdpdGhUYXggPSBjdXJyZW5jeSh0b3RhbGZvclByb2R1Y3RzV2l0aFRheCk7XHJcbiAgICAvL2dyYW5kVG90YWxTdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChHcmFuZFRvdGFsU3RyaW5nSUQpLnZhbHVlO1xyXG4gICAgdmFyIGdyYW5kVG90YWxDdXJyZW5jeSA9IGN1cnJlbmN5KGdyYW5kVG90YWwudmFsdWVHcmFuZFRvdGFsKS5hZGQodG90YWxDdXJyZW5jeVdpdGhUYXgpOyBcclxuXHJcbiAgICAvLyR4eHgueHhcclxuICAgIGFsZXJ0KFwieHhcIik7XHJcbiAgICBhbGVydChncmFuZFRvdGFsQ3VycmVuY3kpO1xyXG5cclxuICAgIGdyYW5kVG90YWwudmFsdWVHcmFuZFRvdGFsID0gZ3JhbmRUb3RhbEN1cnJlbmN5O1xyXG4gICAgYWxlcnQoZ3JhbmRUb3RhbC52YWx1ZUdyYW5kVG90YWwpO1xyXG4gICAgcmV0dXJuO1xyXG4gICAgLy9yZXR1cm4gZ3JhbmRUb3RhbEN1cnJlbmN5O1xyXG59XHJcblxyXG4vL2lmICh3aW5kb3cuRnVuY3Rpb24gPT0gXCJteUV4dEZ1bmN0aW9uMVwiKVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSBcclxuICAgIHtcclxuXHJcbiAgICAvL2FsZXJ0KFwidW5kZWZpbmVkLCBoZXJlXCIpO1xyXG5cclxuICAgIC8vaWYod2luZG93Lm5hbWUgPT0gXCIxXCIpXHJcbiAgICAvL3tcclxuICAgICBcclxuICAgICAgICBhbGVydChcImdldHRvdGFsXCIpO1xyXG4gICAgICAgIHdpbmRvdy5teUV4dEZ1bmN0aW9uMSA9IGZ1bmN0aW9uKGNvc3RJRCwgYnV5VGhpc01hbnlJRCwgdG90YWxDb3N0SUQsIEdyYW5kVG90YWxTdHJpbmdJRCwgZ3JhbmRUb3RhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRUYXhlZEFtb3VudChjb3N0SUQsIGJ1eVRoaXNNYW55SUQsIHRvdGFsQ29zdElELCBHcmFuZFRvdGFsU3RyaW5nSUQsIGdyYW5kVG90YWwpO1xyXG4gICAgICAgIH1cclxuICAgIC8vfVxyXG4gICAgLy9lbHNlIGlmICh3aW5kb3cubmFtZSA9PSBcImdldEdyYW5kVG90YWxcIilcclxuICAgIC8ve1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFsZXJ0KFwiZ3JhbmQgdG90YWxcIik7XHJcbiAgICAvL3dpbmRvdy5teUV4dEZ1bmN0aW9uMiA9IGZ1bmN0aW9uKHRvdGFsZm9yUHJvZHVjdHNXaXRoVGF4LCBncmFuZFRvdGFsKSB7XHJcbiAgICAvL3JldHVybiBHZXRTdW1tZWRHcmFuZFRvdGFsKHRvdGFsZm9yUHJvZHVjdHNXaXRoVGF4LCBncmFuZFRvdGFsKTtcclxuICAgIC8vfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQoXCJieXBhc3NlZFwiKTtcclxuICAgIC8vY29uc29sZS5sb2cod2luZG93Lm5hbWUpO1xyXG4gICAgLy9hbGVydCh3aW5kb3cubmFtZSk7XHJcblxyXG5cclxuIiwiLypcbiBjdXJyZW5jeS5qcyAtIHYyLjAuNC04NDQ1NmY4OVxuIGh0dHA6Ly9zY3Vya2VyLmdpdGh1Yi5pby9jdXJyZW5jeS5qc1xuXG4gQ29weXJpZ2h0IChjKSAyMDIyIEphc29uIFdpbHNvblxuIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4qL1xuKGZ1bmN0aW9uKGUsZyl7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1nKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZyk6KGU9ZXx8c2VsZixlLmN1cnJlbmN5PWcoKSl9KSh0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShiLGEpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGUpKXJldHVybiBuZXcgZShiLGEpO2E9T2JqZWN0LmFzc2lnbih7fSxtLGEpO3ZhciBkPU1hdGgucG93KDEwLGEucHJlY2lzaW9uKTt0aGlzLmludFZhbHVlPWI9ZyhiLGEpO3RoaXMudmFsdWU9Yi9kO2EuaW5jcmVtZW50PWEuaW5jcmVtZW50fHwxL2Q7YS5ncm91cHM9YS51c2VWZWRpYz9uOnA7dGhpcy5zPWE7dGhpcy5wPWR9ZnVuY3Rpb24gZyhiLGEpe3ZhciBkPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTohMDt2YXIgYz1hLmRlY2ltYWw7XG52YXIgaD1hLmVycm9yT25JbnZhbGlkLGs9YS5mcm9tQ2VudHMsbD1NYXRoLnBvdygxMCxhLnByZWNpc2lvbiksZj1iIGluc3RhbmNlb2YgZTtpZihmJiZrKXJldHVybiBiLmludFZhbHVlO2lmKFwibnVtYmVyXCI9PT10eXBlb2YgYnx8ZiljPWY/Yi52YWx1ZTpiO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBiKWg9bmV3IFJlZ0V4cChcIlteLVxcXFxkXCIrYytcIl1cIixcImdcIiksYz1uZXcgUmVnRXhwKFwiXFxcXFwiK2MsXCJnXCIpLGM9KGM9Yi5yZXBsYWNlKC9cXCgoLiopXFwpLyxcIi0kMVwiKS5yZXBsYWNlKGgsXCJcIikucmVwbGFjZShjLFwiLlwiKSl8fDA7ZWxzZXtpZihoKXRocm93IEVycm9yKFwiSW52YWxpZCBJbnB1dFwiKTtjPTB9a3x8KGM9KGMqbCkudG9GaXhlZCg0KSk7cmV0dXJuIGQ/TWF0aC5yb3VuZChjKTpjfXZhciBtPXtzeW1ib2w6XCIkXCIsc2VwYXJhdG9yOlwiLFwiLGRlY2ltYWw6XCIuXCIsZXJyb3JPbkludmFsaWQ6ITEscHJlY2lzaW9uOjIscGF0dGVybjpcIiEjXCIsbmVnYXRpdmVQYXR0ZXJuOlwiLSEjXCIsZm9ybWF0OmZ1bmN0aW9uKGIsXG5hKXt2YXIgZD1hLnBhdHRlcm4sYz1hLm5lZ2F0aXZlUGF0dGVybixoPWEuc3ltYm9sLGs9YS5zZXBhcmF0b3IsbD1hLmRlY2ltYWw7YT1hLmdyb3Vwczt2YXIgZj0oXCJcIitiKS5yZXBsYWNlKC9eLS8sXCJcIikuc3BsaXQoXCIuXCIpLHE9ZlswXTtmPWZbMV07cmV0dXJuKDA8PWIudmFsdWU/ZDpjKS5yZXBsYWNlKFwiIVwiLGgpLnJlcGxhY2UoXCIjXCIscS5yZXBsYWNlKGEsXCIkMVwiK2spKyhmP2wrZjpcIlwiKSl9LGZyb21DZW50czohMX0scD0vKFxcZCkoPz0oXFxkezN9KStcXGIpL2csbj0vKFxcZCkoPz0oXFxkXFxkKStcXGRcXGIpL2c7ZS5wcm90b3R5cGU9e2FkZDpmdW5jdGlvbihiKXt2YXIgYT10aGlzLnMsZD10aGlzLnA7cmV0dXJuIGUoKHRoaXMuaW50VmFsdWUrZyhiLGEpKS8oYS5mcm9tQ2VudHM/MTpkKSxhKX0sc3VidHJhY3Q6ZnVuY3Rpb24oYil7dmFyIGE9dGhpcy5zLGQ9dGhpcy5wO3JldHVybiBlKCh0aGlzLmludFZhbHVlLWcoYixhKSkvKGEuZnJvbUNlbnRzPzE6ZCksYSl9LG11bHRpcGx5OmZ1bmN0aW9uKGIpe3ZhciBhPVxudGhpcy5zO3JldHVybiBlKHRoaXMuaW50VmFsdWUqYi8oYS5mcm9tQ2VudHM/MTpNYXRoLnBvdygxMCxhLnByZWNpc2lvbikpLGEpfSxkaXZpZGU6ZnVuY3Rpb24oYil7dmFyIGE9dGhpcy5zO3JldHVybiBlKHRoaXMuaW50VmFsdWUvZyhiLGEsITEpLGEpfSxkaXN0cmlidXRlOmZ1bmN0aW9uKGIpe3ZhciBhPXRoaXMuaW50VmFsdWUsZD10aGlzLnAsYz10aGlzLnMsaD1bXSxrPU1hdGhbMDw9YT9cImZsb29yXCI6XCJjZWlsXCJdKGEvYiksbD1NYXRoLmFicyhhLWsqYik7Zm9yKGQ9Yy5mcm9tQ2VudHM/MTpkOzAhPT1iO2ItLSl7dmFyIGY9ZShrL2QsYyk7MDxsLS0mJihmPWZbMDw9YT9cImFkZFwiOlwic3VidHJhY3RcIl0oMS9kKSk7aC5wdXNoKGYpfXJldHVybiBofSxkb2xsYXJzOmZ1bmN0aW9uKCl7cmV0dXJufn50aGlzLnZhbHVlfSxjZW50czpmdW5jdGlvbigpe3JldHVybn5+KHRoaXMuaW50VmFsdWUldGhpcy5wKX0sZm9ybWF0OmZ1bmN0aW9uKGIpe3ZhciBhPXRoaXMucztyZXR1cm5cImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBiP2IodGhpcyxhKTphLmZvcm1hdCh0aGlzLE9iamVjdC5hc3NpZ24oe30sYSxiKSl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5zLGE9Yi5pbmNyZW1lbnQ7cmV0dXJuKE1hdGgucm91bmQodGhpcy5pbnRWYWx1ZS90aGlzLnAvYSkqYSkudG9GaXhlZChiLnByZWNpc2lvbil9LHRvSlNPTjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfX07cmV0dXJuIGV9KTtcbiJdfQ==
