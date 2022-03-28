(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const currency = require('currency.js');

//FIRST VIEW OF ONE TEMPLATE

//set grand total
function sumTotals(total, Obj)
{
    alert("in sum fuction");
    
    //alert(gHoldsSum);
    //alert(gHoldsSum);

    alert(total);//$105.00
    let totalCurrency = currency(total);
    alert(Obj.valueGrandTotal);
    
    
    var grandTotalCurrency = currency(Obj.valueGrandTotal);
    alert(grandTotalCurrency);

    alert(currency(totalCurrency));
    //alert();

    //Obj.valueGrandTotal = grandTotalCurrency.add( (grandTotalCurrency.add(currency(totalCurrency))));
    Obj.valueGrandTotal = grandTotalCurrency.add(currency(totalCurrency));
    alert("insum");//105.00
    alert(Obj.valueGrandTotal);

    
    
    
    //debugger;
    
    //alert(total);
    //alert(gHoldsSum);
    //alert(gHoldsSum[0]);
    //alert(gHoldsSum.valueGrandTotal);


    ///let totalWithTaxForProductLine = (totalCurrency).add(currency(Obj.valueGrandTotal));
    
    
    //alert(totalWithTaxForProductLine);
    //alert(totalWithTaxForProductLine.format());//$ ~ 0.00
return(1);//((Obj.valueGrandTotal).format()));
}
    
    
    if (typeof window !== 'undefined') {
        window.myExtFunction3 = function(total, Obj) {
            return sumTotals(total, Obj);
        }
    }
},{"currency.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VzZXJzL2pvc2h1L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm5vZGVfbW9kdWxlcy9jdXJyZW5jeS5qcy9kaXN0L2N1cnJlbmN5Lm1pbi5qcyIsInN1bVRvdGFsc1RoaXJkQnVuZGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXG4gY3VycmVuY3kuanMgLSB2Mi4wLjQtODQ0NTZmODlcbiBodHRwOi8vc2N1cmtlci5naXRodWIuaW8vY3VycmVuY3kuanNcblxuIENvcHlyaWdodCAoYykgMjAyMiBKYXNvbiBXaWxzb25cbiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZVxuKi9cbihmdW5jdGlvbihlLGcpe1wib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZygpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGcpOihlPWV8fHNlbGYsZS5jdXJyZW5jeT1nKCkpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoYixhKXtpZighKHRoaXMgaW5zdGFuY2VvZiBlKSlyZXR1cm4gbmV3IGUoYixhKTthPU9iamVjdC5hc3NpZ24oe30sbSxhKTt2YXIgZD1NYXRoLnBvdygxMCxhLnByZWNpc2lvbik7dGhpcy5pbnRWYWx1ZT1iPWcoYixhKTt0aGlzLnZhbHVlPWIvZDthLmluY3JlbWVudD1hLmluY3JlbWVudHx8MS9kO2EuZ3JvdXBzPWEudXNlVmVkaWM/bjpwO3RoaXMucz1hO3RoaXMucD1kfWZ1bmN0aW9uIGcoYixhKXt2YXIgZD0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06ITA7dmFyIGM9YS5kZWNpbWFsO1xudmFyIGg9YS5lcnJvck9uSW52YWxpZCxrPWEuZnJvbUNlbnRzLGw9TWF0aC5wb3coMTAsYS5wcmVjaXNpb24pLGY9YiBpbnN0YW5jZW9mIGU7aWYoZiYmaylyZXR1cm4gYi5pbnRWYWx1ZTtpZihcIm51bWJlclwiPT09dHlwZW9mIGJ8fGYpYz1mP2IudmFsdWU6YjtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYiloPW5ldyBSZWdFeHAoXCJbXi1cXFxcZFwiK2MrXCJdXCIsXCJnXCIpLGM9bmV3IFJlZ0V4cChcIlxcXFxcIitjLFwiZ1wiKSxjPShjPWIucmVwbGFjZSgvXFwoKC4qKVxcKS8sXCItJDFcIikucmVwbGFjZShoLFwiXCIpLnJlcGxhY2UoYyxcIi5cIikpfHwwO2Vsc2V7aWYoaCl0aHJvdyBFcnJvcihcIkludmFsaWQgSW5wdXRcIik7Yz0wfWt8fChjPShjKmwpLnRvRml4ZWQoNCkpO3JldHVybiBkP01hdGgucm91bmQoYyk6Y312YXIgbT17c3ltYm9sOlwiJFwiLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVycm9yT25JbnZhbGlkOiExLHByZWNpc2lvbjoyLHBhdHRlcm46XCIhI1wiLG5lZ2F0aXZlUGF0dGVybjpcIi0hI1wiLGZvcm1hdDpmdW5jdGlvbihiLFxuYSl7dmFyIGQ9YS5wYXR0ZXJuLGM9YS5uZWdhdGl2ZVBhdHRlcm4saD1hLnN5bWJvbCxrPWEuc2VwYXJhdG9yLGw9YS5kZWNpbWFsO2E9YS5ncm91cHM7dmFyIGY9KFwiXCIrYikucmVwbGFjZSgvXi0vLFwiXCIpLnNwbGl0KFwiLlwiKSxxPWZbMF07Zj1mWzFdO3JldHVybigwPD1iLnZhbHVlP2Q6YykucmVwbGFjZShcIiFcIixoKS5yZXBsYWNlKFwiI1wiLHEucmVwbGFjZShhLFwiJDFcIitrKSsoZj9sK2Y6XCJcIikpfSxmcm9tQ2VudHM6ITF9LHA9LyhcXGQpKD89KFxcZHszfSkrXFxiKS9nLG49LyhcXGQpKD89KFxcZFxcZCkrXFxkXFxiKS9nO2UucHJvdG90eXBlPXthZGQ6ZnVuY3Rpb24oYil7dmFyIGE9dGhpcy5zLGQ9dGhpcy5wO3JldHVybiBlKCh0aGlzLmludFZhbHVlK2coYixhKSkvKGEuZnJvbUNlbnRzPzE6ZCksYSl9LHN1YnRyYWN0OmZ1bmN0aW9uKGIpe3ZhciBhPXRoaXMucyxkPXRoaXMucDtyZXR1cm4gZSgodGhpcy5pbnRWYWx1ZS1nKGIsYSkpLyhhLmZyb21DZW50cz8xOmQpLGEpfSxtdWx0aXBseTpmdW5jdGlvbihiKXt2YXIgYT1cbnRoaXMucztyZXR1cm4gZSh0aGlzLmludFZhbHVlKmIvKGEuZnJvbUNlbnRzPzE6TWF0aC5wb3coMTAsYS5wcmVjaXNpb24pKSxhKX0sZGl2aWRlOmZ1bmN0aW9uKGIpe3ZhciBhPXRoaXMucztyZXR1cm4gZSh0aGlzLmludFZhbHVlL2coYixhLCExKSxhKX0sZGlzdHJpYnV0ZTpmdW5jdGlvbihiKXt2YXIgYT10aGlzLmludFZhbHVlLGQ9dGhpcy5wLGM9dGhpcy5zLGg9W10saz1NYXRoWzA8PWE/XCJmbG9vclwiOlwiY2VpbFwiXShhL2IpLGw9TWF0aC5hYnMoYS1rKmIpO2ZvcihkPWMuZnJvbUNlbnRzPzE6ZDswIT09YjtiLS0pe3ZhciBmPWUoay9kLGMpOzA8bC0tJiYoZj1mWzA8PWE/XCJhZGRcIjpcInN1YnRyYWN0XCJdKDEvZCkpO2gucHVzaChmKX1yZXR1cm4gaH0sZG9sbGFyczpmdW5jdGlvbigpe3JldHVybn5+dGhpcy52YWx1ZX0sY2VudHM6ZnVuY3Rpb24oKXtyZXR1cm5+fih0aGlzLmludFZhbHVlJXRoaXMucCl9LGZvcm1hdDpmdW5jdGlvbihiKXt2YXIgYT10aGlzLnM7cmV0dXJuXCJmdW5jdGlvblwiPT09XG50eXBlb2YgYj9iKHRoaXMsYSk6YS5mb3JtYXQodGhpcyxPYmplY3QuYXNzaWduKHt9LGEsYikpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBiPXRoaXMucyxhPWIuaW5jcmVtZW50O3JldHVybihNYXRoLnJvdW5kKHRoaXMuaW50VmFsdWUvdGhpcy5wL2EpKmEpLnRvRml4ZWQoYi5wcmVjaXNpb24pfSx0b0pTT046ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX19O3JldHVybiBlfSk7XG4iLCJjb25zdCBjdXJyZW5jeSA9IHJlcXVpcmUoJ2N1cnJlbmN5LmpzJyk7XHJcblxyXG4vL0ZJUlNUIFZJRVcgT0YgT05FIFRFTVBMQVRFXHJcblxyXG4vL3NldCBncmFuZCB0b3RhbFxyXG5mdW5jdGlvbiBzdW1Ub3RhbHModG90YWwsIE9iailcclxue1xyXG4gICAgYWxlcnQoXCJpbiBzdW0gZnVjdGlvblwiKTtcclxuICAgIFxyXG4gICAgLy9hbGVydChnSG9sZHNTdW0pO1xyXG4gICAgLy9hbGVydChnSG9sZHNTdW0pO1xyXG5cclxuICAgIGFsZXJ0KHRvdGFsKTsvLyQxMDUuMDBcclxuICAgIGxldCB0b3RhbEN1cnJlbmN5ID0gY3VycmVuY3kodG90YWwpO1xyXG4gICAgYWxlcnQoT2JqLnZhbHVlR3JhbmRUb3RhbCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgdmFyIGdyYW5kVG90YWxDdXJyZW5jeSA9IGN1cnJlbmN5KE9iai52YWx1ZUdyYW5kVG90YWwpO1xyXG4gICAgYWxlcnQoZ3JhbmRUb3RhbEN1cnJlbmN5KTtcclxuXHJcbiAgICBhbGVydChjdXJyZW5jeSh0b3RhbEN1cnJlbmN5KSk7XHJcbiAgICAvL2FsZXJ0KCk7XHJcblxyXG4gICAgLy9PYmoudmFsdWVHcmFuZFRvdGFsID0gZ3JhbmRUb3RhbEN1cnJlbmN5LmFkZCggKGdyYW5kVG90YWxDdXJyZW5jeS5hZGQoY3VycmVuY3kodG90YWxDdXJyZW5jeSkpKSk7XHJcbiAgICBPYmoudmFsdWVHcmFuZFRvdGFsID0gZ3JhbmRUb3RhbEN1cnJlbmN5LmFkZChjdXJyZW5jeSh0b3RhbEN1cnJlbmN5KSk7XHJcbiAgICBhbGVydChcImluc3VtXCIpOy8vMTA1LjAwXHJcbiAgICBhbGVydChPYmoudmFsdWVHcmFuZFRvdGFsKTtcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvL2RlYnVnZ2VyO1xyXG4gICAgXHJcbiAgICAvL2FsZXJ0KHRvdGFsKTtcclxuICAgIC8vYWxlcnQoZ0hvbGRzU3VtKTtcclxuICAgIC8vYWxlcnQoZ0hvbGRzU3VtWzBdKTtcclxuICAgIC8vYWxlcnQoZ0hvbGRzU3VtLnZhbHVlR3JhbmRUb3RhbCk7XHJcblxyXG5cclxuICAgIC8vL2xldCB0b3RhbFdpdGhUYXhGb3JQcm9kdWN0TGluZSA9ICh0b3RhbEN1cnJlbmN5KS5hZGQoY3VycmVuY3koT2JqLnZhbHVlR3JhbmRUb3RhbCkpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vYWxlcnQodG90YWxXaXRoVGF4Rm9yUHJvZHVjdExpbmUpO1xyXG4gICAgLy9hbGVydCh0b3RhbFdpdGhUYXhGb3JQcm9kdWN0TGluZS5mb3JtYXQoKSk7Ly8kIH4gMC4wMFxyXG5yZXR1cm4oMSk7Ly8oKE9iai52YWx1ZUdyYW5kVG90YWwpLmZvcm1hdCgpKSk7XHJcbn1cclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB3aW5kb3cubXlFeHRGdW5jdGlvbjMgPSBmdW5jdGlvbih0b3RhbCwgT2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdW1Ub3RhbHModG90YWwsIE9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==
