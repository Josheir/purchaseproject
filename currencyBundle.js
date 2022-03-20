(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VzZXJzL2pvc2h1L0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm1haW4xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9hbGVydChcInRlc3RcIik7XHJcblxyXG4vL3VwZGF0ZXMgY2FydFxyXG4vL2Z1bmN0aW9uIEdldFRvdGFsV2l0aFRheEZyb21BbXRQcm9kdWN0KGNvc3RJRCwgYnV5VGhpc01hbnlJRCwgdG90YWxDb3N0SUQsIEdyYW5kVG90YWxTdHJpbmdJRClcclxuZnVuY3Rpb24gZ2V0VGF4ZWRBbW91bnQoY29zdElELCBidXlUaGlzTWFueUlELCB0b3RhbENvc3RJRCwgZ3JhbmRUb3RhbFN0cmluZ0lELCBncmFuZFRvdGFsKVxyXG57XHJcblxyXG4gICAgXHJcbiAgICBhbGVydChcImxvb2tpbmcgZ29vZCFcIik7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgdmFyIGNvc3RGb3JFYWNoUHJvZHVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb3N0SUQpLnZhbHVlO1xyXG4gICAgdmFyIGJ1eVRoaXNBbXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXlUaGlzTWFueUlEKS52YWx1ZTtcclxuXHJcblxyXG4vL3B1dCBhIGZsYWcgaGVyZSB0byBkZW5vdGUgaWYgZmlyc3QgdGllbSB0aHJvdWdoIGlmIG5vdCBsb29rIGF0IGFtb3VudCB0byBidXkgIGFzIGJ1eXRoaXNhbXRcclxuLy9ncmFuZCB0b3RhbCBpcyBsb29raW5nIGF0IGFsbCBzdGFydGluZyB2YWx1ZXNcclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8keHh4Lnh4XHJcbiAgICAvL2FsZXJ0KFwiY2hlY2sgdGhpc1wiKTtcclxuICAgIC8vYWxlcnQoY29zdEZvckVhY2hQcm9kdWN0cyk7XHJcbiAgICAvL2FsZXJ0KGJ1eVRoaXNBbXQpO1xyXG4gICAgY29zdFdpdGhvdXRUYXggPSBjdXJyZW5jeShjb3N0Rm9yRWFjaFByb2R1Y3RzKS5tdWx0aXBseShjdXJyZW5jeShidXlUaGlzQW10KSk7XHJcbiAgICB2YXIgdGF4ID0gKGNvc3RXaXRob3V0VGF4KS5tdWx0aXBseSguMDUpO1xyXG4gICAgLy9hbGVydCh0YXgpO1xyXG4gICAgdmFyIHRheEN1cnJlbmN5ID0gY3VycmVuY3kodGF4KTtcclxuICAgIC8vYWxlcnQodGF4Q3VycmVuY3kpO1xyXG4gICAgdmFyIHRvdGFsID0gdGF4Q3VycmVuY3kuYWRkKGN1cnJlbmN5KGNvc3RXaXRob3V0VGF4KSkuZm9ybWF0KCk7XHJcbiAgICAvL2FsZXJ0KHRvdGFsKTtcclxuICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoR3JhbmRUb3RhbFN0cmluZ0lEKS52YWx1ZTtcclxuICAgIC8vJHh4eC54eFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG90YWxDb3N0SUQpLnZhbHVlID0gdG90YWw7XHJcbiAgIFxyXG4gICAgYWxlcnQoXCJ5ZXNcIik7XHJcbiAgICBHZXRTdW1tZWRHcmFuZFRvdGFsKHRvdGFsLCBncmFuZFRvdGFsKTtcclxuXHJcbi8vJHh4eC54eCAgICBcclxucmV0dXJuIDtcclxuXHJcbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vJHh4eC54eFxyXG5mdW5jdGlvbiBHZXRTdW1tZWRHcmFuZFRvdGFsKHRvdGFsZm9yUHJvZHVjdHNXaXRoVGF4LCBncmFuZFRvdGFsKVxyXG57XHJcbiAgICBhbGVydChcImhhcyBpdCBtYWRlIGl0IHRoaXMgZmFyP1wiKTtcclxuICAgIHZhciB0b3RhbEN1cnJlbmN5V2l0aFRheCA9IGN1cnJlbmN5KHRvdGFsZm9yUHJvZHVjdHNXaXRoVGF4KTtcclxuICAgIC8vZ3JhbmRUb3RhbFN0cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEdyYW5kVG90YWxTdHJpbmdJRCkudmFsdWU7XHJcbiAgICB2YXIgZ3JhbmRUb3RhbEN1cnJlbmN5ID0gY3VycmVuY3koZ3JhbmRUb3RhbC52YWx1ZUdyYW5kVG90YWwpLmFkZCh0b3RhbEN1cnJlbmN5V2l0aFRheCk7IFxyXG5cclxuICAgIC8vJHh4eC54eFxyXG4gICAgYWxlcnQoXCJ4eFwiKTtcclxuICAgIGFsZXJ0KGdyYW5kVG90YWxDdXJyZW5jeSk7XHJcblxyXG4gICAgZ3JhbmRUb3RhbC52YWx1ZUdyYW5kVG90YWwgPSBncmFuZFRvdGFsQ3VycmVuY3k7XHJcbiAgICBhbGVydChncmFuZFRvdGFsLnZhbHVlR3JhbmRUb3RhbCk7XHJcbiAgICByZXR1cm47XHJcbiAgICAvL3JldHVybiBncmFuZFRvdGFsQ3VycmVuY3k7XHJcbn1cclxuXHJcbi8vaWYgKHdpbmRvdy5GdW5jdGlvbiA9PSBcIm15RXh0RnVuY3Rpb24xXCIpXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIFxyXG4gICAge1xyXG5cclxuICAgIC8vYWxlcnQoXCJ1bmRlZmluZWQsIGhlcmVcIik7XHJcblxyXG4gICAgLy9pZih3aW5kb3cubmFtZSA9PSBcIjFcIilcclxuICAgIC8ve1xyXG4gICAgIFxyXG4gICAgICAgIGFsZXJ0KFwiZ2V0dG90YWxcIik7XHJcbiAgICAgICAgd2luZG93Lm15RXh0RnVuY3Rpb24xID0gZnVuY3Rpb24oY29zdElELCBidXlUaGlzTWFueUlELCB0b3RhbENvc3RJRCwgR3JhbmRUb3RhbFN0cmluZ0lELCBncmFuZFRvdGFsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFRheGVkQW1vdW50KGNvc3RJRCwgYnV5VGhpc01hbnlJRCwgdG90YWxDb3N0SUQsIEdyYW5kVG90YWxTdHJpbmdJRCwgZ3JhbmRUb3RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgLy99XHJcbiAgICAvL2Vsc2UgaWYgKHdpbmRvdy5uYW1lID09IFwiZ2V0R3JhbmRUb3RhbFwiKVxyXG4gICAgLy97XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWxlcnQoXCJncmFuZCB0b3RhbFwiKTtcclxuICAgIC8vd2luZG93Lm15RXh0RnVuY3Rpb24yID0gZnVuY3Rpb24odG90YWxmb3JQcm9kdWN0c1dpdGhUYXgsIGdyYW5kVG90YWwpIHtcclxuICAgIC8vcmV0dXJuIEdldFN1bW1lZEdyYW5kVG90YWwodG90YWxmb3JQcm9kdWN0c1dpdGhUYXgsIGdyYW5kVG90YWwpO1xyXG4gICAgLy99XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhbGVydChcImJ5cGFzc2VkXCIpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cubmFtZSk7XHJcbiAgICAvL2FsZXJ0KHdpbmRvdy5uYW1lKTtcclxuXHJcblxyXG4iXX0=
