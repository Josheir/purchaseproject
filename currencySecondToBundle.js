const currency = require('currency.js');
//bundle is :  <script src = "currencyBundle2.js"></script>

//100 = 1.00, etc.
function getTotal(quantityBuying, costForEach){

    let total = currency(quantityBuying).multiply(currency(costForEach));
    let tax = currency(total).multiply(.05);
    let totalWithTax = currency(total) + currency(tax);
    return(currency(total));
}

function sumTotals(total, gHoldsSum){
let totalWithTaxForProductLine = currency(total) + currency(gHoldsSum);
}


if (typeof window !== 'undefined') {
    window.myExtFunction2 = function() {
        return getTitle();
    }
}