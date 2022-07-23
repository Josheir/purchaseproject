/*
			//template number one presses this and changes values in quantity and amount purchased
			function submitChangesOnOrderTemplates(mainDiv, originalQuantity, productID, quantityID, amountPurchasedID, amountToPurchaseID)
			{
				

				
				
				

				var makeYellow = document.getElementById(mainDiv);
				makeYellow.style["background-color"] = "yellow";
				var amountToBePurchased  = 0;
				var  amountInPurchasedField = 0;
				var amountPurchasedSoFar = 0;
				var value1 = 0;
				var value2 = 0;
				//total of product with server
				amountInPurchasedField = document.getElementById(quantityID).value;
				//already purchased
				amountPurchasedSoFar = document.getElementById(amountPurchasedID).value;
				
				
				
				//amount held for subtraction when submit button pressed
				amountToBePurchased = document.getElementById(amountToPurchaseID).value;
				
				
				
				//document.getElementById(amountPurchasedID).value="";

				
				//if there is enough product go in here - take from quantity amount
				if((parseInt(amountInPurchasedField) >= parseInt(amountToBePurchased))   )//&& parseInt(amountToBePurchased) > 0  )
				{

					
					//
					value1 = document.getElementById(amountToPurchaseID).value; 
					//value2 = amountopurchase + amountpurchaseedsofar
					value2  = parseInt(value1) + parseInt(amountPurchasedSoFar);
					if(value2 < 0)
					{
						document.getElementById(amountToPurchaseID).value = 0;
						return;
					}
					
					
					
					
					
					//puts total in here
					document.getElementById(amountPurchasedID).value = value2 ;
					
					if(value1 > 0){

						
					document.getElementById(quantityID).value = parseInt(amountInPurchasedField) - parseInt(amountToBePurchased) ;
					}else if (value1 == 0)
					{
						
					}

					//negative value for amount to purchase
					//value
					else if ( (parseInt(amountPurchasedSoFar) + parseInt(value1)) > -1){
						
						
						
						document.getElementById(quantityID).value = parseInt(amountInPurchasedField) - parseInt(amountToBePurchased) ;
						//
						document.getElementById(amountToPurchaseID).value = 0;
					}


					
					
					gTotalOfPurchases =  parseInt(gTotalOfPurchases) +  parseInt(amountToBePurchased); 
					
					
					
					if(gTotalOfPurchases > 0){
                        document.getElementById(amountToPurchaseID).value = 0;
                        
						
						
						//so far, so good is still in database!
						//SetDataFromOrderTemplateOnSubmit(originalQuantity, productID, amountToBePurchased, 0)
						SetDataFromOrderTemplateOnSubmit(amountPurchasedSoFar, productID, amountToBePurchased, 0)



                        return (1);
                    }

					///////////


				

					///////////



				}
      }


      //called from checkout button to setitem for template2 to use
      function  SetDataFromOrderTemplateOnSubmit(quantityOfProduct, productID, quantityTryingToSet, reduceBool)
			{
				//if(firstTime == "yes")
				//{
				//	//sessionStorage.clear();
				//	firstTime = "no";
				//}
				
				var string = "";
				
				var keyFlag = ""
				var bought, totalquantity = 0;

				




				
				let keys = Object.keys(sessionStorage);
				
				//console.log(keys);
				for(let key of keys) {
					
					
					
					
				
					
					
				//total the quantity and overwrite - is already a record
				if(key == (productID.toString())){
					
					
				
					
					
					
					keyFlag = "found";
					//sofar
					
					
					//bought
					bought = sessionStorage.getItem(key);
					
					
					//document.getElementById(amountPurchasedID).value = bought;
					
					//quantity of records is decreasing
					var totalquantity = 0;
					
					//if (reduceBool)
					//{
					//	
					//	totalquantity =  parseInt(bought) -  parseInt(quantityTryingToSet);
					//	
					//}
					//quantity of records is acummulating
					//else 
					{
						
						
						
						
						
						totalquantity = parseInt(bought) + parseInt(quantityTryingToSet);
						//console.log(document.getElementById(amountPurchasedID).value);
						//document.getElementById(amountPurchasedID).value = 579;//'//totalquantity;
						
						
						
						
						
						
						
					}
					
					
					//overwrites
					sessionStorage.removeItem(productID);
					
					
					
					
					


					//sessionStorage.setItem(productID, totalquantity);
					sessionStorage.setItem(productID, parseInt(quantityTryingToSet));
					
					

					
					break;
				
					}
				}
				//there is no productID record yet, make one here 
				if (keyFlag !=  "found")
				{
					



					//sessionStorage.setItem( parseInt(productID),  parseInt(quantityTryingToSet));
					sessionStorage.setItem( parseInt(productID),  parseInt(quantityTryingToSet));
					
					
					

				}
				
                

			}*/