(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//alert("test");
var currency = require("./node_modules/currency.js");
//var a = currency(1);

//alert(a);



//$xxx.xx
//var moneyAmt = GetTotalWithTaxFromAmtProduct(costID, buyThisManyID);
//$xxx.xx                               //$xxx.xx
//var summedMoneyAmt = GetSummedGrandTotal(moneyAmt);


//updates cart
//function GetTotalWithTaxFromAmtProduct(costID, buyThisManyID, totalCostID, GrandTotalStringID)
function myFunction()
{

    
    alert("looking good!");
    debugger;
    var costForEachProducts = document.getElementById(costID).value;
    var buyThisAmt = document.getElementById(buyThisManyID).value;
    
    //$xxx.xx
    var total = ((currency(costForEachProducts).multiply(currency(buyThisAmt))).format());
    //document.getElementById(GrandTotalStringID).value;
    //$xxx.xx
    document.getElementById(totalCostID).value = total;


//$xxx.xx    
return total ;

}
                            //$xxx.xx
function GetSummedGrandTotal(moneyAmt)
{

    //$xxx.xx
    return ;
}


if (typeof window !== 'undefined') {
    window.myExtFunction = function() {
        return myFunction();
    }
}
},{"./node_modules/currency.js":2}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VzZXJzL2pvc2h1L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm1haW4xLmpzIiwibm9kZV9tb2R1bGVzL2N1cnJlbmN5LmpzL2Rpc3QvY3VycmVuY3kubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2FsZXJ0KFwidGVzdFwiKTtcclxudmFyIGN1cnJlbmN5ID0gcmVxdWlyZShcIi4vbm9kZV9tb2R1bGVzL2N1cnJlbmN5LmpzXCIpO1xyXG4vL3ZhciBhID0gY3VycmVuY3koMSk7XHJcblxyXG4vL2FsZXJ0KGEpO1xyXG5cclxuXHJcblxyXG4vLyR4eHgueHhcclxuLy92YXIgbW9uZXlBbXQgPSBHZXRUb3RhbFdpdGhUYXhGcm9tQW10UHJvZHVjdChjb3N0SUQsIGJ1eVRoaXNNYW55SUQpO1xyXG4vLyR4eHgueHggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8keHh4Lnh4XHJcbi8vdmFyIHN1bW1lZE1vbmV5QW10ID0gR2V0U3VtbWVkR3JhbmRUb3RhbChtb25leUFtdCk7XHJcblxyXG5cclxuLy91cGRhdGVzIGNhcnRcclxuLy9mdW5jdGlvbiBHZXRUb3RhbFdpdGhUYXhGcm9tQW10UHJvZHVjdChjb3N0SUQsIGJ1eVRoaXNNYW55SUQsIHRvdGFsQ29zdElELCBHcmFuZFRvdGFsU3RyaW5nSUQpXHJcbmZ1bmN0aW9uIG15RnVuY3Rpb24oKVxyXG57XHJcblxyXG4gICAgXHJcbiAgICBhbGVydChcImxvb2tpbmcgZ29vZCFcIik7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIHZhciBjb3N0Rm9yRWFjaFByb2R1Y3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29zdElEKS52YWx1ZTtcclxuICAgIHZhciBidXlUaGlzQW10ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV5VGhpc01hbnlJRCkudmFsdWU7XHJcbiAgICBcclxuICAgIC8vJHh4eC54eFxyXG4gICAgdmFyIHRvdGFsID0gKChjdXJyZW5jeShjb3N0Rm9yRWFjaFByb2R1Y3RzKS5tdWx0aXBseShjdXJyZW5jeShidXlUaGlzQW10KSkpLmZvcm1hdCgpKTtcclxuICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoR3JhbmRUb3RhbFN0cmluZ0lEKS52YWx1ZTtcclxuICAgIC8vJHh4eC54eFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG90YWxDb3N0SUQpLnZhbHVlID0gdG90YWw7XHJcblxyXG5cclxuLy8keHh4Lnh4ICAgIFxyXG5yZXR1cm4gdG90YWwgO1xyXG5cclxufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8keHh4Lnh4XHJcbmZ1bmN0aW9uIEdldFN1bW1lZEdyYW5kVG90YWwobW9uZXlBbXQpXHJcbntcclxuXHJcbiAgICAvLyR4eHgueHhcclxuICAgIHJldHVybiA7XHJcbn1cclxuXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdpbmRvdy5teUV4dEZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG15RnVuY3Rpb24oKTtcclxuICAgIH1cclxufSIsIi8qXG4gY3VycmVuY3kuanMgLSB2Mi4wLjQtODQ0NTZmODlcbiBodHRwOi8vc2N1cmtlci5naXRodWIuaW8vY3VycmVuY3kuanNcblxuIENvcHlyaWdodCAoYykgMjAyMiBKYXNvbiBXaWxzb25cbiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZVxuKi9cbihmdW5jdGlvbihlLGcpe1wib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZygpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGcpOihlPWV8fHNlbGYsZS5jdXJyZW5jeT1nKCkpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoYixhKXtpZighKHRoaXMgaW5zdGFuY2VvZiBlKSlyZXR1cm4gbmV3IGUoYixhKTthPU9iamVjdC5hc3NpZ24oe30sbSxhKTt2YXIgZD1NYXRoLnBvdygxMCxhLnByZWNpc2lvbik7dGhpcy5pbnRWYWx1ZT1iPWcoYixhKTt0aGlzLnZhbHVlPWIvZDthLmluY3JlbWVudD1hLmluY3JlbWVudHx8MS9kO2EuZ3JvdXBzPWEudXNlVmVkaWM/bjpwO3RoaXMucz1hO3RoaXMucD1kfWZ1bmN0aW9uIGcoYixhKXt2YXIgZD0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06ITA7dmFyIGM9YS5kZWNpbWFsO1xudmFyIGg9YS5lcnJvck9uSW52YWxpZCxrPWEuZnJvbUNlbnRzLGw9TWF0aC5wb3coMTAsYS5wcmVjaXNpb24pLGY9YiBpbnN0YW5jZW9mIGU7aWYoZiYmaylyZXR1cm4gYi5pbnRWYWx1ZTtpZihcIm51bWJlclwiPT09dHlwZW9mIGJ8fGYpYz1mP2IudmFsdWU6YjtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYiloPW5ldyBSZWdFeHAoXCJbXi1cXFxcZFwiK2MrXCJdXCIsXCJnXCIpLGM9bmV3IFJlZ0V4cChcIlxcXFxcIitjLFwiZ1wiKSxjPShjPWIucmVwbGFjZSgvXFwoKC4qKVxcKS8sXCItJDFcIikucmVwbGFjZShoLFwiXCIpLnJlcGxhY2UoYyxcIi5cIikpfHwwO2Vsc2V7aWYoaCl0aHJvdyBFcnJvcihcIkludmFsaWQgSW5wdXRcIik7Yz0wfWt8fChjPShjKmwpLnRvRml4ZWQoNCkpO3JldHVybiBkP01hdGgucm91bmQoYyk6Y312YXIgbT17c3ltYm9sOlwiJFwiLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVycm9yT25JbnZhbGlkOiExLHByZWNpc2lvbjoyLHBhdHRlcm46XCIhI1wiLG5lZ2F0aXZlUGF0dGVybjpcIi0hI1wiLGZvcm1hdDpmdW5jdGlvbihiLFxuYSl7dmFyIGQ9YS5wYXR0ZXJuLGM9YS5uZWdhdGl2ZVBhdHRlcm4saD1hLnN5bWJvbCxrPWEuc2VwYXJhdG9yLGw9YS5kZWNpbWFsO2E9YS5ncm91cHM7dmFyIGY9KFwiXCIrYikucmVwbGFjZSgvXi0vLFwiXCIpLnNwbGl0KFwiLlwiKSxxPWZbMF07Zj1mWzFdO3JldHVybigwPD1iLnZhbHVlP2Q6YykucmVwbGFjZShcIiFcIixoKS5yZXBsYWNlKFwiI1wiLHEucmVwbGFjZShhLFwiJDFcIitrKSsoZj9sK2Y6XCJcIikpfSxmcm9tQ2VudHM6ITF9LHA9LyhcXGQpKD89KFxcZHszfSkrXFxiKS9nLG49LyhcXGQpKD89KFxcZFxcZCkrXFxkXFxiKS9nO2UucHJvdG90eXBlPXthZGQ6ZnVuY3Rpb24oYil7dmFyIGE9dGhpcy5zLGQ9dGhpcy5wO3JldHVybiBlKCh0aGlzLmludFZhbHVlK2coYixhKSkvKGEuZnJvbUNlbnRzPzE6ZCksYSl9LHN1YnRyYWN0OmZ1bmN0aW9uKGIpe3ZhciBhPXRoaXMucyxkPXRoaXMucDtyZXR1cm4gZSgodGhpcy5pbnRWYWx1ZS1nKGIsYSkpLyhhLmZyb21DZW50cz8xOmQpLGEpfSxtdWx0aXBseTpmdW5jdGlvbihiKXt2YXIgYT1cbnRoaXMucztyZXR1cm4gZSh0aGlzLmludFZhbHVlKmIvKGEuZnJvbUNlbnRzPzE6TWF0aC5wb3coMTAsYS5wcmVjaXNpb24pKSxhKX0sZGl2aWRlOmZ1bmN0aW9uKGIpe3ZhciBhPXRoaXMucztyZXR1cm4gZSh0aGlzLmludFZhbHVlL2coYixhLCExKSxhKX0sZGlzdHJpYnV0ZTpmdW5jdGlvbihiKXt2YXIgYT10aGlzLmludFZhbHVlLGQ9dGhpcy5wLGM9dGhpcy5zLGg9W10saz1NYXRoWzA8PWE/XCJmbG9vclwiOlwiY2VpbFwiXShhL2IpLGw9TWF0aC5hYnMoYS1rKmIpO2ZvcihkPWMuZnJvbUNlbnRzPzE6ZDswIT09YjtiLS0pe3ZhciBmPWUoay9kLGMpOzA8bC0tJiYoZj1mWzA8PWE/XCJhZGRcIjpcInN1YnRyYWN0XCJdKDEvZCkpO2gucHVzaChmKX1yZXR1cm4gaH0sZG9sbGFyczpmdW5jdGlvbigpe3JldHVybn5+dGhpcy52YWx1ZX0sY2VudHM6ZnVuY3Rpb24oKXtyZXR1cm5+fih0aGlzLmludFZhbHVlJXRoaXMucCl9LGZvcm1hdDpmdW5jdGlvbihiKXt2YXIgYT10aGlzLnM7cmV0dXJuXCJmdW5jdGlvblwiPT09XG50eXBlb2YgYj9iKHRoaXMsYSk6YS5mb3JtYXQodGhpcyxPYmplY3QuYXNzaWduKHt9LGEsYikpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBiPXRoaXMucyxhPWIuaW5jcmVtZW50O3JldHVybihNYXRoLnJvdW5kKHRoaXMuaW50VmFsdWUvdGhpcy5wL2EpKmEpLnRvRml4ZWQoYi5wcmVjaXNpb24pfSx0b0pTT046ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX19O3JldHVybiBlfSk7XG4iXX0=
