const currency = require('currency.js');
//bundle is :  <script src = "currencyBundle2.js"></script>

//100 = 1.00, etc.
function getTotal(quantityBuying, costForEach){
    //alert("inhere");
    let total = currency(quantityBuying).multiply(currency(costForEach));
    let tax = currency(total).multiply(.05);
    //let totalFloat = currency(total);
    //let taxFloat = parseFloat(tax);
    let totalWithTax = (total).add(tax);
    //let totalWithTaxFloat = currency(totalWithTax);
    //alert(total);
    alert("function2");
    alert(totalWithTax);
    //alert(tax);
    //return((totalWithTax.format()));
}

if (typeof window !== 'undefined') {
    window.myExtFunction2 = function(quantityBuying, costForEach) {
        return getTotal(quantityBuying, costForEach);
    }
}