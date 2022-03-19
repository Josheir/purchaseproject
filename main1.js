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