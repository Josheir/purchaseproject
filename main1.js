var currrency = require('currency.js');
//alert("test");

//updates cart
//function GetTotalWithTaxFromAmtProduct(costID, buyThisManyID, totalCostID, GrandTotalStringID)
function getTaxedAmount(costID, buyThisManyID, totalCostID, grandTotalStringID, grandTotal)
{
   alert("looking good!");
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
    


