const currency = require('currency.js');

function sumTotals(total, gHoldsSum)
{
    let totalWithTaxForProductLine = currency(total) + currency(gHoldsSum.valueGrandTotal);
}
    
    
    if (typeof window !== 'undefined') {
        window.myExtFunction3 = function() {
            return getTitle();
        }
    }