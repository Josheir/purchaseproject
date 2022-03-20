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


