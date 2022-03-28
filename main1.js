var currrency = require('currency.js');
//alert("test");

//updates cart
//function GetTotalWithTaxFromAmtProduct(costID, buyThisManyID, totalCostID, GrandTotalStringID)

//is same with counterpart just return value different

//costID :  get string for costforeachproducts and use currnecy to change it at end 
function getTaxedAmount(costID, buyThisManyID, totalCostID, grandTotalStringID, grandTotal)
{
    //test
    alert("3rdFunction");
    debugger;
    let costForEachProducts = document.getElementById(costID).value;
    //alert(costForEachProducts);
    let buyThisAmt = document.getElementById(buyThisManyID).value;
    //alert(buyThisAmt);
    let total = currency(buyThisAmt).multiply(currency(costForEachProducts));
    //alert(total);
    let tax = currency(total).multiply(.05);
    //alert(tax);
    let totalWithTax = (total).add(tax);
    //alert(totalWithTax);
    GetSummedGrandTotal(total, grandTotal);
    
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

       // alert("gettotal");
        window.myExtFunction1 = function(costID, buyThisManyID, totalCostID, GrandTotalStringID, grandTotal)
        {
            return getTaxedAmount(costID, buyThisManyID, totalCostID, GrandTotalStringID, grandTotal);
        }
    
        //alert("grand total");
    
    }

    //alert("bypassed");
    


