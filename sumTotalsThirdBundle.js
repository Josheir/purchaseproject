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