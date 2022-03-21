(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var currrency = require('currency.js');
//alert("test");

//updates cart
//function GetTotalWithTaxFromAmtProduct(costID, buyThisManyID, totalCostID, GrandTotalStringID)
function getTaxedAmount(costID, buyThisManyID, totalCostID, grandTotalStringID, grandTotal)
{
   
    debugger;
    let costForEachProducts = document.getElementById(costID).value;
    let buyThisAmt = document.getElementById(buyThisManyID).value;
    let costWithoutTax = currency(costForEachProducts).multiply(currency(buyThisAmt));
    let tax = (costWithoutTax).multiply(.05);
    //alert(tax);
    let taxCurrency = currency(tax);
    //alert(taxCurrency);
    let total = taxCurrency.add(currency(costWithoutTax)).format();
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

        alert("gettotal");
        window.myExtFunction1 = function(costID, buyThisManyID, totalCostID, GrandTotalStringID, grandTotal)
        {
            return getTaxedAmount(costID, buyThisManyID, totalCostID, GrandTotalStringID, grandTotal);
        }
    
        alert("grand total");
    
    }

    alert("bypassed");
    



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VzZXJzL2pvc2h1L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm1haW4xLmpzIiwibm9kZV9tb2R1bGVzL2N1cnJlbmN5LmpzL2Rpc3QvY3VycmVuY3kubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBjdXJycmVuY3kgPSByZXF1aXJlKCdjdXJyZW5jeS5qcycpO1xyXG4vL2FsZXJ0KFwidGVzdFwiKTtcclxuXHJcbi8vdXBkYXRlcyBjYXJ0XHJcbi8vZnVuY3Rpb24gR2V0VG90YWxXaXRoVGF4RnJvbUFtdFByb2R1Y3QoY29zdElELCBidXlUaGlzTWFueUlELCB0b3RhbENvc3RJRCwgR3JhbmRUb3RhbFN0cmluZ0lEKVxyXG5mdW5jdGlvbiBnZXRUYXhlZEFtb3VudChjb3N0SUQsIGJ1eVRoaXNNYW55SUQsIHRvdGFsQ29zdElELCBncmFuZFRvdGFsU3RyaW5nSUQsIGdyYW5kVG90YWwpXHJcbntcclxuICAgXHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIGxldCBjb3N0Rm9yRWFjaFByb2R1Y3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29zdElEKS52YWx1ZTtcclxuICAgIGxldCBidXlUaGlzQW10ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV5VGhpc01hbnlJRCkudmFsdWU7XHJcbiAgICBsZXQgY29zdFdpdGhvdXRUYXggPSBjdXJyZW5jeShjb3N0Rm9yRWFjaFByb2R1Y3RzKS5tdWx0aXBseShjdXJyZW5jeShidXlUaGlzQW10KSk7XHJcbiAgICBsZXQgdGF4ID0gKGNvc3RXaXRob3V0VGF4KS5tdWx0aXBseSguMDUpO1xyXG4gICAgLy9hbGVydCh0YXgpO1xyXG4gICAgbGV0IHRheEN1cnJlbmN5ID0gY3VycmVuY3kodGF4KTtcclxuICAgIC8vYWxlcnQodGF4Q3VycmVuY3kpO1xyXG4gICAgbGV0IHRvdGFsID0gdGF4Q3VycmVuY3kuYWRkKGN1cnJlbmN5KGNvc3RXaXRob3V0VGF4KSkuZm9ybWF0KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b3RhbENvc3RJRCkudmFsdWUgPSB0b3RhbDtcclxuICAgIGFsZXJ0KFwieWVzXCIpO1xyXG4gICAgR2V0U3VtbWVkR3JhbmRUb3RhbCh0b3RhbCwgZ3JhbmRUb3RhbCk7XHJcblxyXG4vLyR4eHgueHggICAgXHJcbnJldHVybiA7XHJcblxyXG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyR4eHgueHhcclxuZnVuY3Rpb24gR2V0U3VtbWVkR3JhbmRUb3RhbCh0b3RhbGZvclByb2R1Y3RzV2l0aFRheCwgZ3JhbmRUb3RhbClcclxue1xyXG4gICAgYWxlcnQoXCJoYXMgaXQgbWFkZSBpdCB0aGlzIGZhcj9cIik7XHJcbiAgICB2YXIgdG90YWxDdXJyZW5jeVdpdGhUYXggPSBjdXJyZW5jeSh0b3RhbGZvclByb2R1Y3RzV2l0aFRheCk7XHJcbiAgICAvL2dyYW5kVG90YWxTdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChHcmFuZFRvdGFsU3RyaW5nSUQpLnZhbHVlO1xyXG4gICAgdmFyIGdyYW5kVG90YWxDdXJyZW5jeSA9IGN1cnJlbmN5KGdyYW5kVG90YWwudmFsdWVHcmFuZFRvdGFsKS5hZGQodG90YWxDdXJyZW5jeVdpdGhUYXgpOyBcclxuXHJcbiAgICAvLyR4eHgueHhcclxuICAgIGFsZXJ0KFwieHhcIik7XHJcbiAgICBhbGVydChncmFuZFRvdGFsQ3VycmVuY3kpO1xyXG5cclxuICAgIGdyYW5kVG90YWwudmFsdWVHcmFuZFRvdGFsID0gZ3JhbmRUb3RhbEN1cnJlbmN5O1xyXG4gICAgYWxlcnQoZ3JhbmRUb3RhbC52YWx1ZUdyYW5kVG90YWwpO1xyXG4gICAgcmV0dXJuO1xyXG4gICAgLy9yZXR1cm4gZ3JhbmRUb3RhbEN1cnJlbmN5O1xyXG59XHJcblxyXG4vL2lmICh3aW5kb3cuRnVuY3Rpb24gPT0gXCJteUV4dEZ1bmN0aW9uMVwiKVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSBcclxuICAgIHtcclxuXHJcbiAgICAgICAgYWxlcnQoXCJnZXR0b3RhbFwiKTtcclxuICAgICAgICB3aW5kb3cubXlFeHRGdW5jdGlvbjEgPSBmdW5jdGlvbihjb3N0SUQsIGJ1eVRoaXNNYW55SUQsIHRvdGFsQ29zdElELCBHcmFuZFRvdGFsU3RyaW5nSUQsIGdyYW5kVG90YWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VGF4ZWRBbW91bnQoY29zdElELCBidXlUaGlzTWFueUlELCB0b3RhbENvc3RJRCwgR3JhbmRUb3RhbFN0cmluZ0lELCBncmFuZFRvdGFsKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBhbGVydChcImdyYW5kIHRvdGFsXCIpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQoXCJieXBhc3NlZFwiKTtcclxuICAgIFxyXG5cclxuXHJcbiIsIi8qXG4gY3VycmVuY3kuanMgLSB2Mi4wLjQtODQ0NTZmODlcbiBodHRwOi8vc2N1cmtlci5naXRodWIuaW8vY3VycmVuY3kuanNcblxuIENvcHlyaWdodCAoYykgMjAyMiBKYXNvbiBXaWxzb25cbiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZVxuKi9cbihmdW5jdGlvbihlLGcpe1wib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZygpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGcpOihlPWV8fHNlbGYsZS5jdXJyZW5jeT1nKCkpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoYixhKXtpZighKHRoaXMgaW5zdGFuY2VvZiBlKSlyZXR1cm4gbmV3IGUoYixhKTthPU9iamVjdC5hc3NpZ24oe30sbSxhKTt2YXIgZD1NYXRoLnBvdygxMCxhLnByZWNpc2lvbik7dGhpcy5pbnRWYWx1ZT1iPWcoYixhKTt0aGlzLnZhbHVlPWIvZDthLmluY3JlbWVudD1hLmluY3JlbWVudHx8MS9kO2EuZ3JvdXBzPWEudXNlVmVkaWM/bjpwO3RoaXMucz1hO3RoaXMucD1kfWZ1bmN0aW9uIGcoYixhKXt2YXIgZD0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06ITA7dmFyIGM9YS5kZWNpbWFsO1xudmFyIGg9YS5lcnJvck9uSW52YWxpZCxrPWEuZnJvbUNlbnRzLGw9TWF0aC5wb3coMTAsYS5wcmVjaXNpb24pLGY9YiBpbnN0YW5jZW9mIGU7aWYoZiYmaylyZXR1cm4gYi5pbnRWYWx1ZTtpZihcIm51bWJlclwiPT09dHlwZW9mIGJ8fGYpYz1mP2IudmFsdWU6YjtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYiloPW5ldyBSZWdFeHAoXCJbXi1cXFxcZFwiK2MrXCJdXCIsXCJnXCIpLGM9bmV3IFJlZ0V4cChcIlxcXFxcIitjLFwiZ1wiKSxjPShjPWIucmVwbGFjZSgvXFwoKC4qKVxcKS8sXCItJDFcIikucmVwbGFjZShoLFwiXCIpLnJlcGxhY2UoYyxcIi5cIikpfHwwO2Vsc2V7aWYoaCl0aHJvdyBFcnJvcihcIkludmFsaWQgSW5wdXRcIik7Yz0wfWt8fChjPShjKmwpLnRvRml4ZWQoNCkpO3JldHVybiBkP01hdGgucm91bmQoYyk6Y312YXIgbT17c3ltYm9sOlwiJFwiLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVycm9yT25JbnZhbGlkOiExLHByZWNpc2lvbjoyLHBhdHRlcm46XCIhI1wiLG5lZ2F0aXZlUGF0dGVybjpcIi0hI1wiLGZvcm1hdDpmdW5jdGlvbihiLFxuYSl7dmFyIGQ9YS5wYXR0ZXJuLGM9YS5uZWdhdGl2ZVBhdHRlcm4saD1hLnN5bWJvbCxrPWEuc2VwYXJhdG9yLGw9YS5kZWNpbWFsO2E9YS5ncm91cHM7dmFyIGY9KFwiXCIrYikucmVwbGFjZSgvXi0vLFwiXCIpLnNwbGl0KFwiLlwiKSxxPWZbMF07Zj1mWzFdO3JldHVybigwPD1iLnZhbHVlP2Q6YykucmVwbGFjZShcIiFcIixoKS5yZXBsYWNlKFwiI1wiLHEucmVwbGFjZShhLFwiJDFcIitrKSsoZj9sK2Y6XCJcIikpfSxmcm9tQ2VudHM6ITF9LHA9LyhcXGQpKD89KFxcZHszfSkrXFxiKS9nLG49LyhcXGQpKD89KFxcZFxcZCkrXFxkXFxiKS9nO2UucHJvdG90eXBlPXthZGQ6ZnVuY3Rpb24oYil7dmFyIGE9dGhpcy5zLGQ9dGhpcy5wO3JldHVybiBlKCh0aGlzLmludFZhbHVlK2coYixhKSkvKGEuZnJvbUNlbnRzPzE6ZCksYSl9LHN1YnRyYWN0OmZ1bmN0aW9uKGIpe3ZhciBhPXRoaXMucyxkPXRoaXMucDtyZXR1cm4gZSgodGhpcy5pbnRWYWx1ZS1nKGIsYSkpLyhhLmZyb21DZW50cz8xOmQpLGEpfSxtdWx0aXBseTpmdW5jdGlvbihiKXt2YXIgYT1cbnRoaXMucztyZXR1cm4gZSh0aGlzLmludFZhbHVlKmIvKGEuZnJvbUNlbnRzPzE6TWF0aC5wb3coMTAsYS5wcmVjaXNpb24pKSxhKX0sZGl2aWRlOmZ1bmN0aW9uKGIpe3ZhciBhPXRoaXMucztyZXR1cm4gZSh0aGlzLmludFZhbHVlL2coYixhLCExKSxhKX0sZGlzdHJpYnV0ZTpmdW5jdGlvbihiKXt2YXIgYT10aGlzLmludFZhbHVlLGQ9dGhpcy5wLGM9dGhpcy5zLGg9W10saz1NYXRoWzA8PWE/XCJmbG9vclwiOlwiY2VpbFwiXShhL2IpLGw9TWF0aC5hYnMoYS1rKmIpO2ZvcihkPWMuZnJvbUNlbnRzPzE6ZDswIT09YjtiLS0pe3ZhciBmPWUoay9kLGMpOzA8bC0tJiYoZj1mWzA8PWE/XCJhZGRcIjpcInN1YnRyYWN0XCJdKDEvZCkpO2gucHVzaChmKX1yZXR1cm4gaH0sZG9sbGFyczpmdW5jdGlvbigpe3JldHVybn5+dGhpcy52YWx1ZX0sY2VudHM6ZnVuY3Rpb24oKXtyZXR1cm5+fih0aGlzLmludFZhbHVlJXRoaXMucCl9LGZvcm1hdDpmdW5jdGlvbihiKXt2YXIgYT10aGlzLnM7cmV0dXJuXCJmdW5jdGlvblwiPT09XG50eXBlb2YgYj9iKHRoaXMsYSk6YS5mb3JtYXQodGhpcyxPYmplY3QuYXNzaWduKHt9LGEsYikpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBiPXRoaXMucyxhPWIuaW5jcmVtZW50O3JldHVybihNYXRoLnJvdW5kKHRoaXMuaW50VmFsdWUvdGhpcy5wL2EpKmEpLnRvRml4ZWQoYi5wcmVjaXNpb24pfSx0b0pTT046ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX19O3JldHVybiBlfSk7XG4iXX0=
