package main

import (
	"database/sql"
	"encoding/json"

	//"errors"
	"fmt"
	"html/template"

	//"strings"

	//"bytes"
	"net/http"

	"context"
	

	//"os"
	"strconv"
	"time"

	"math"

	_ "github.com/go-sql-driver/mysql"
)

/*import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"math/big"
	"net/http"
	"strconv"
	"text/template"
	"time"
)
*/

//test
//repo

//https://github.com/go-session/session

//https://stackoverflow.com/questions/32087233/how-does-mysql-handle-concurrent-inserts
//http://go-database-sql.org/prepared.html
//https://stackoverflow.com/questions/37404989/whats-the-difference-between-db-query-and-db-preparestmt-query-in-golang
//https://golangdocs.com/mysql-golang-crud-example

//1279 dispaly2 main.go
//1634
//
//        bytes1 := ([]byte(ProductCostString))
//(2)     bytes1 := ([]byte(ProductCost))

//test//test//test

//one of these also in displayOrdersTemplateAgain, check this
var savedProductIDs []int

//var globaltest = 0

//var globalFlagisVariable = "no"
//

//passed to an html file
type product struct {
	ProductQuantity int
	ProductName     string
	ProductCatTitle string
	ProductCost     int
}

//for template two
type template2Struct struct {
	OneValue			string
	CondYellow         int
	ProductIDID        string
	RemoveRecordDivID  string
	GrandTotalStringID string

	GrandTotalString string
	BoughtID         string
	Bought           int
	TotalCost        string
	TotalCostID      string
	CostID           string
	AmountToBuyID    string
	Condition        int
	Condition2       int
	ProductID        int
	ProductQuantity  int
	ProductName      string
	DivID            string
	ProductCatTitle  string
	ProductCost      string
}

//spit back to last html page
type Product2 struct {
	InitialFormAmount int
	QuantPurchasing   int
	ID                int
	QuantityAvailable int
	IsEnoughQuantity  bool
}

type HoldsFlag struct {
	Flag string
}
type User1 struct {
	Text   string
	UserID int
}

//used in createtemplate2
var ProductListForCartTemplate = []template2Struct{}

//var ProductList2 = []Product2{}

//used in spitback
var ProductUpdateCart = []Product2{}
var User = []User1{}

//https://www.bing.com/videos/search?q=youtbe+golang+template&refig=e742578f4d004a2b8a5bd1f28849eb0f&ru=%2fsearch%3fq%3dyoutbe%2bgolang%2btemplate%26form%3dANNTH1%26refig%3de742578f4d004a2b8a5bd1f28849eb0f&view=detail&mmscn=vwrc&mid=BD040005A2743ACB801ABD040005A2743ACB801A&FORM=WRVORC
var globt *template.Template

//var globKeyword = ""
var Test = 1

var ProductID = 0

//type Rectangle struct {
//	Length  int
//	breadth int
//	color   string
//}

const MAX_UPLOAD_SIZE = 1024 * 1024 // 1MB

//var string1 = ""

type App struct {
	Name string
}

//var tpl *template.Template

//type employee struct {
//	gKeyword1           string
//	gKeyword2           string
//	gKeyword3           string
//	ProductName         string
//	ProductID           int
//	ProductdDescription string
//	ProductCost         int
//	ProductQuantity     int
//	ProductCatTitle     string
//}

//prod := Product2{
//
//	IsEnoughQuantity:  enough,
//	QuantityAvailable: quant,
//	ID:                id,
//}

func MakeUser(text string, userid int) {

	user := User1{
		Text:   text,
		UserID: userid,
	}

	User = append(User, user)

}

func dbConn() (db *sql.DB) {
	dbDriver := "mysql"
	dbUser := "root"
	dbPass := ""
	dbName := "ecommerce"
	db, err := sql.Open(dbDriver, dbUser+":"+dbPass+"@/"+dbName)
	if err != nil {
		panic(err.Error())
	}
	return db
}

/*
// USD represents US dollar amount in terms of cents
type USD int64

// Float64 converts a USD to float64
func (m USD) Float64() float64 {
	x := float64(m)
	x = x / 100
	return x
}

// Multiply safely multiplies a USD value by a float64, rounding
// to the nearest cent.
func (m USD) Multiply(f float64) USD {
	x := (float64(m) * f) + 0.5
	return USD(x)
}

// String returns a formatted USD value
func (m USD) String() string {
	x := float64(m)
	x = x / 100
	return fmt.Sprintf("$%.2f", x)
}

////////////
// ToUSD converts a float64 to USD
// e.g. 1.23 to $1.23, 1.345 to $1.35
func ToUSD(f float64) USD {
	return USD((f * 100) + 0.5)
}

//////////
*/
//https://www.bing.com/search?q=receiver%20int%20golang&qs=n&form=QBRE&sp=-1&pq=receiver%20int%20golang&sc=0-19&sk=&cvid=14C3226BD73C46F09A57AA46291441EA
//func addElement(var1 int, var2 string, var3 string, var4 int) {
//
//	var element product
//	element.ProductQuantity = var1
//	element.ProductName = var2
//	element.ProductCatTitle = var3
//	element.ProductCost = var4
//
//}

type Product3 struct {
	ID    int
	Quant int
}

func makeListForHTML(amtPurchased int, enough bool, id int, quant int, initialvalue int) {

	//func makeListForHTML(amtPurchased int, enough bool, id int, quant int, initialValue int) {

	//to spit back to html
	prod := Product2{

		InitialFormAmount: initialvalue,
		QuantPurchasing:   amtPurchased, //
		ID:                id,           //
		QuantityAvailable: quant,
		IsEnoughQuantity:  enough, //

	}
	//list to spit back to html for rewriting all the quant
	ProductUpdateCart = append(ProductUpdateCart, prod)
}

//this last page is where the data is spat back to html to note any database changes that cause purchase impossible
//func tpage(id int, quant int) {
//
//	//to spit back to html
//	prod := Product2{
//
//		QuantityAvailable: quant,
//		ID:                id,
//	}
//	//list to spit back to html for rewriting all the quant
//	ProductList2 = append(ProductList2, prod)
//}

//var orderid1 = 100

//https://www.geeksforgeeks.org/how-to-get-current-time-in-golang/
func processLogin(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	fmt.Println("test2")
	//globaltest++

	/*
		err = r.ParseForm()D

		array := r.Form["var"][1]
		fmt.Println(array)

		value := r.Form["var"]

		a := value[0]

	*/

	User = nil

	err := r.ParseForm()
	if err != nil {
		fmt.Fprint(w, err)
	}

	//query := r.URL.Query()

	//userid, present := query["userid"]

	//gets this info from login.html
	userid := r.Form["userid"][0]

	//if !present || len(userid) == 0 {
	//	fmt.Println("filters not present")
	//}

	//string to int
	useridInt, err := (strconv.Atoi(userid))

	if err != nil {
		fmt.Println(err)
	}

	//pass, present := query["pass"]

	//if !present || len(pass) == 0 {
	//	fmt.Println("filters not present")
	//}
	//gets from login.html
	pass := r.Form["pass"][0]

	db := dbConn()

	stmt, err := db.Prepare("SELECT customers.Password FROM customers WHERE customers.CustomerID = ?")

	if err != nil {
		fmt.Println(err)
	}

	//substituted with ?
	rows, err := stmt.Query(useridInt)

	if err != nil {
		fmt.Println(err)
	}

	var PasswordID string

	for rows.Next() {

		//stores password in here from database
		err = rows.Scan(&PasswordID)
		if err != nil {
			fmt.Println(err)
		}

	}

	passFlag := "no"

	if PasswordID == "" {
		passFlag = "password wrong"
	} else if PasswordID == pass {

		passFlag = "password correct"

		var UserID = 1
		//var userID = 1
		//if a user is reloging in than delete all the savedtext

		stmt, err := db.Prepare("DELETE FROM savedtext WHERE savedtext.UserID = ?")

		if err != nil {
			fmt.Println(err)
		}

		stmt.Exec(UserID)

		////////////

		//stmt2, err := db.Prepare("INSERT INTO savedtext(Text, UserID) VALUES(?,?)")
		//if err != nil {
		//	fmt.Println(err)
		//}
		//stmt2.Exec("[1]", UserID)

		/////////////

	} else {

		passFlag = "password wrong"
	}
	println("test3")
	MakeUser(passFlag, useridInt)

	json.NewEncoder(w).Encode(User)

}

/////////////////////////////////////////
/////////////////////////////////////////

/////////////////////////////////////////
////////////////////////////////////////

func sendBackNewCartData(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	ctx := context.Background()
	ProductUpdateCart = nil

	/////////

	var err1 = r.ParseForm()
	if err1 != nil {
		fmt.Fprint(w, err1)
	}

	var i = 0

	var allProductIds []string
	var allPurchaseAmounts []string
	//var userID1 []string

	var length = len(r.Form["userid"])

	if length > 0 {
		for i = 0; i < (length); i++ {

			//userID1 = append(userID1, []string{r.Form["uid"][i]}...)

		}

	} else {

	}
	//product and purchase amount

	length = len(r.Form["id"])
	if length > 0 {

		for i = 0; i < (length); i++ {

			allProductIds = append(allProductIds, []string{r.Form["id"][i]}...)
			allPurchaseAmounts = append(allPurchaseAmounts, []string{r.Form["amtTryingToPurchase"][i]}...)

		}

	} else {

	}

	//////////

	/*query := r.URL.Query()

	allProductIds, present := query["id"]

	if !present || len(allProductIds) == 0 {
		fmt.Println("filters not present")
	}

	allPurchaseAmounts, present := query["quant"]
	//in template 2 bought column
	if !present || len(allPurchaseAmounts) == 0 {
		fmt.Println("filters not present")
	}

	userID1, present := query["userid"]

	if !present || len(userID1) == 0 {
		fmt.Println("filters not present")
	}
	*/
	db := dbConn()

	var thisProductID = 0
	//DatabaseQuantity := 0

	//var haveWrittenOrder bool = false
	//var j = 0
	//quant trying to buy
	var prodDBAmount int

	var enough bool = false

	var k = 0

	////////////////

	//var quantPurchased = 0
	var doUpdatesAndSelects = true

	for k = 0; k < len(allProductIds); k++ {

		enough = false

		//////
		//thisProductID, _ = strconv.Atoi(allProductIds[k])

		//val1, err1 := strconv.Atoi(allProductIds[k])
		//if err1 != nil {
		//	fmt.Println(err)
		//}

		//////

		//too do this better combine both queries - taking to long, so kept it!
		enough = false
		//one record gets quantity using productID and is "ready"
		stmt, err := db.Prepare("SELECT products.ProductQuantity FROM products WHERE products.ProductID = ? AND products.ProductStatus = 'ready'")

		if err != nil {
			fmt.Println(err)
		}

		//subsdtitute this for ?
		rows, err := stmt.Query(allProductIds[k])

		if err != nil {
			fmt.Println(err)
		}

		//runs one time
		for rows.Next() {

			//put quantity from dbase into here
			err = rows.Scan(&prodDBAmount)

			if err != nil {
				fmt.Println(err)
			}

			//convert to string
			quantPurchased, err := strconv.Atoi(allPurchaseAmounts[k])
			if err != nil {
				fmt.Println(err)
			}

			//avoids all updates and selects
			if quantPurchased > prodDBAmount {
				doUpdatesAndSelects = false
				break

			}

		} //for
	}

	var aRecordWasCreated = false
	///////////////////

	for k = 0; k < len(allProductIds); k++ {

		/////

		//////

		tx, err := db.Begin()
		if err != nil {
			fmt.Println(err)
		}

		enough = false

		//////
		thisProductID, _ = strconv.Atoi(allProductIds[k])

		//val1, err1 := strconv.Atoi(allProductIds[k])
		//if err1 != nil {
		//	fmt.Println(err)
		//}

		//////

		//too do this better combine both queries - taking to long, so kept it!
		enough = false
		//one record gets quantity using productID and is "ready"
		stmt, err := db.Prepare("SELECT products.ProductQuantity FROM products WHERE products.ProductID = ? AND products.ProductStatus = 'ready'")

		if err != nil {
			fmt.Println(err)
		}

		// substitute with productID
		rows, err := stmt.Query(allProductIds[k])

		if err != nil {
			fmt.Println(err)
		}

		//runs one time
		for rows.Next() {

			///////

			///////

			//amount from database goes here
			err = rows.Scan(&prodDBAmount)

			if err != nil {
				fmt.Println(err)
			}

			//makes it a string
			quantPurchasing, err := strconv.Atoi(allPurchaseAmounts[k])
			if err != nil {
				fmt.Println(err)
			}

			////////

			//if quantPurchasing == 0{
			//	continue
			//}

			/////////
			var purchaseString = gAllPurchaseAmounts[k]
			purchaseInt, err := strconv.Atoi(purchaseString)
			if err != nil {
				fmt.Println(err)
			}

			//not enough in database
			if prodDBAmount-quantPurchasing < 0 {
				enough = false
				//for when passing data back to html
				//quantPurchasing, enough, (thisProductID), quantPurchasing
				//func makeListForHTML(amtPurchased int, enough bool, id int, quant int, initialvalue int) {

				makeListForHTML(quantPurchasing, enough, (thisProductID), purchaseInt, purchaseInt)
				continue

			} else {
				enough = true
			}
			// val2 is int id

			/*
						initialFormAmount: initialValue,
				quantPurchasing:   amtPurchased,//
				ID:                id,//
				QuantityAvailable: quant,
				IsEnoughQuantity:  enough,//
			*/
			makeListForHTML(quantPurchasing, enough, (thisProductID), purchaseInt, purchaseInt)

		}

		//////********************************/////

		//to string
		currentPurchase, err := strconv.Atoi(allPurchaseAmounts[k])
		if err != nil {
			fmt.Println(err)
		}

		//in here, is no quantities greater than there criteria

		//this gets the record for update

		var ProductCost float64
		var ProductQuantity, ProductID, AdminID, CustomerID, OrderID int
		var gKeyword1, gKeyword2, gKeyword3, ProductName, ProductDescription, ProductCatTitle, ProductFilename, ProductStatus string

		//if client b is passed this than quantity will be the same as client a, so whole thing needs to be transaction
		//because productquantity is used

		//gets all the fields of data from  a particular productid and ready status, so that an update may happen
		//checked at beginnnig if this exists
		//get all attributes to update with
		err = tx.QueryRowContext(ctx, "SELECT * FROM products WHERE products.ProductID = ? and products.ProductStatus = 'ready' ", allProductIds[k]).Scan(
			&ProductID, &ProductFilename, &ProductName, &ProductDescription, &ProductCost, &ProductQuantity, &ProductCatTitle, &gKeyword1, &gKeyword2, &gKeyword3, &CustomerID,
			&OrderID, &ProductStatus, &AdminID)

		if err != nil {
			fmt.Println(err)
		}

		//ProductID = thisProductID
		//ProductQuantity is amount in database
		//intquant is amount purchasing

		//any product left, if so, this much
		var quantLeft = ProductQuantity - currentPurchase

		//if avoidUpdatesAndSelects == "no"  ||
		// is procuct and not much more asked for than available
		//if quantity asking for is zero or is way to much, dont do transaction
		//instead zero valuable will be hidden and larger number will be set to zero and still displayed by template2

		//quantPurchased > prodDBAmount
		//productquant is amount in database, aleady checked : is enough for purchase

		//if thisQuant > 0 && intQuant < ProductQuantity && intQuant > 0  && doUpdatesAndSelects == "yes" {

		//checks if database is altered
		//fix this, here, done
		if quantLeft > 0 && currentPurchase > 0 && doUpdatesAndSelects {

			{

				aRecordWasCreated = true

				//if thisQuant > 0 &&  intQuant < ProductQuantity{

				//updates productid fields to its quantity left
				_, err = tx.ExecContext(ctx, "Update products SET ProductQuantity = ? WHERE products.ProductID = ? and products.ProductStatus = 'ready' ", quantLeft, thisProductID)
				if err != nil {
					fmt.Println(err)
				}

				datetime := time.Now()

				//var id1 = 0

				//var productQuant int64
				var currentOrder_ID int64

				//check if there is an order id created for the product record, if there isn't than create the order table

				//err = tx.QueryRowContext(ctx, "SELECT products.OrderID, products.ProductQuantity  FROM products WHERE products.ProductID =  ? and  products.ProductStatus = 'purchased'", allProductIds[j]).(&id1, &productQuant)
				//if err != nil {
				//	fmt.Println(err)
				//}

				//no order id stored in product record so create both
				//if err == sql.ErrNoRows {

				//if !haveWrittenOrder {

				//gets orderid for insert product, is zero if no order record
				res, err := tx.ExecContext(ctx, "INSERT INTO orders (OrderDate) values(?)", datetime)

				if err != nil {
					fmt.Println(err)
				}

				//checks for id of last record
				currentOrder_ID, err = res.LastInsertId()

				if err != nil {
					fmt.Println(err)
				}

				//lastID++

				//haveWrittenOrder = true
				//}

				//also need to create a new product table because there is no order record, so there is no orderid

				//create a purchased record
				ProductStatus = "purchased"
				//_, err = tx.ExecContext(ctx, "INSERT INTO products (ProductFilename, ProductName, ProductDescription, ProductCost, ProductQuantity, ProductCatTitle,ProductKeyword1,ProductKeyword2 , ProductKeyword3, CustomerID, OrderID, ProductStatus, AdminID, ProductID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", ProductFilename, ProductName, ProductDescription, ProductCost /*(*/, int64(quantLeft) /*+ productQuant)*/, ProductCatTitle, gKeyword1, gKeyword2, gKeyword3, CustomerID, currentOrder_ID, ProductStatus, AdminID, ProductID)

				_, err = tx.ExecContext(ctx, "INSERT INTO products (ProductFilename, ProductName, ProductDescription, ProductCost, ProductQuantity, ProductCatTitle,ProductKeyword1,ProductKeyword2 , ProductKeyword3, CustomerID, OrderID, ProductStatus, AdminID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", ProductFilename, ProductName, ProductDescription, ProductCost, currentPurchase /*int64(quantLeft) + productQuant)*/, ProductCatTitle, gKeyword1, gKeyword2, gKeyword3, CustomerID, currentOrder_ID, ProductStatus, AdminID)

				if err != nil {
					fmt.Println(err)
				}

				//there is an order id in product so there is a product order table too... they are created together, so update this instead of create it
				//} else {
				//
				//	//update product with status of purchased from product table:  original quantity + intQuant
				//	//productquant is quantity of product
				//	//intquant is database quantity taken from the allquant array
				//	_, err = tx.ExecContext(ctx, "Update products SET ProductQuantity = ?, OrderID = ?  WHERE products.ProductID = ? and products.ProductStatus = 'purchased' ", (int64(intQuant) + productQuant), int64(order_ID), allProductIds[j])
				//	if err != nil {
				//		fmt.Println(err)
				//	}
				//
				//}

			} //for

		}

		//doUpdatesAndSelects
		if aRecordWasCreated == true {

			err5 := tx.Commit()
			if err5 != nil {
				fmt.Println(err5)
			}

		}

		//if !didRollback {
		//json.NewEncoder(w).Encode(ProductList2A)
	} // k

	fmt.Println(ProductUpdateCart)
	json.NewEncoder(w).Encode(ProductUpdateCart)

}

//https://github.com/strongo/decimal
//https://programming.guide/go/convert-int64-to-string.html

//stackoverflow.com/questions/54362751/how-can-i-truncate-float64-number-to-a-particular-precision
//stackoverflow.com/questions/4187146/truncate-number-to-two-decimal-places-without-rounding#:~:text=General%20solution%20to%20truncate%20%28no%20rounding%29%20a%20number,with%20exactly%20n%20decimal%20digits%2C%20for%20any%20n%E2%89%A50.

var Condition = 0

var gAllProductIds []string
var gAllPurchaseAmounts []string

func createCartTemplate(w http.ResponseWriter, r *http.Request) {

	ProductListForCartTemplate = nil

	w.Header().Set("Access-Control-Allow-Origin", "*")

	////

	//////

	var err1 = r.ParseForm()
	if err1 != nil {
		fmt.Fprint(w, err1)
	}

	var i = 0
	
	length := len(r.Form["id"])
	if length > 0 {
		gAllProductIds= nil
		gAllPurchaseAmounts = nil
		//save query into arrays
		for i = 0; i < (length); i++ {

			gAllProductIds = append(gAllProductIds, []string{r.Form["id"][i]}...)
			gAllPurchaseAmounts = append(gAllPurchaseAmounts, []string{r.Form["amtTryingToPurchase"][i]}...)
			
			//save to global

			//////////

			/*
				//fills in all innital values so can be used to set available with "Amount to buy"
				for (var i = 0; i< counter+1 ;i++)
				{


				var buyThisManyID = "A" + i;
				let initialValues = document.getElementById(buyThisManyID).value;
				initialValues.push(initialValues);



				console.log(initialValues);

				}
			*/

			///////////

		}

	} else {

	}

	//string1 = ""

	db := dbConn()

	var var1 = "D"
	var var2 = "A"
	var var3 = "C"
	var var4 = "TC"
	var var5 = "B"
	var var6 = "GT"
	var var7 = "V"
	var var8 = "P"

	i = 0
	//if condition = 1, than put headings on the cart template
	Condition++
	//if condition2 = -1, display money totals on buttom of cart template
	var Condition2 = 0

	ID := 0
	bought := 0
	//numTotal := 0.0

	var countCounter = 0

	//n11 := new(big.Int)
	//n12 := new(big.Int)

	

	/////////////////////////////

	//LEFT OFF HERE!!!

	/////////////////////////////
	var GrandTotalAccumulator = 0.0
	for i = 0; i < len(gAllProductIds); i++ {

		fmt.Println("length")
		fmt.Println(len(gAllProductIds))
		countCounter = countCounter + 1

		//Condition++
		Condition2++

		DivID := var1 + (strconv.Itoa(i))
		AmountToBuyID := var2 + (strconv.Itoa(i))
		CostID := var3 + (strconv.Itoa(i))
		TotalCostID := var4 + (strconv.Itoa(i))
		BoughtID := var5 + (strconv.Itoa(i))
		GrandTotalStringID := var6 + (strconv.Itoa(i))
		RemoveRecordDivID := var7 + (strconv.Itoa(i))
		ProductIDID := var8 + (strconv.Itoa(i))
		//ID := var8 + (strconv.Itoa(i))

		var prodid, err = (strconv.Atoi(gAllProductIds[i]))
		if err != nil {
			fmt.Println(err)
		}

		//////////////////

		//get fields for each product ID
		stmt, err := db.Prepare("SELECT products.ProductQuantity,products.ProductName,products.ProductCatTitle, products.ProductCost  " +
			"FROM products WHERE " +
			"products.ProductID = ? AND products.ProductStatus = 'ready'")

		if err != nil {
			fmt.Println(err)
		}

		rows, err := stmt.Query(prodid)

		if err != nil {
			fmt.Println(err)
		}

		var ProductQuantity int

		var ProductName, ProductCatTitle, ProductCost string

		//var GrandTotalString = ""

		//jumps past this, first run through
		//var numTotal = 0

		//	var Result = ""

		//Result = "hello"

		
		
		for rows.Next() {

			//copies from database row to these variables
			err = rows.Scan(&ProductQuantity, &ProductName, &ProductCatTitle, &ProductCost)
			if err != nil {
				fmt.Println(err)
			}

			//Result = ProductCost

			var j = 0
			for j = 0; j < len(gAllProductIds); j++ {

				bought, err = (strconv.Atoi(gAllPurchaseAmounts[j]))
				if err != nil {
					fmt.Println(err)
				}

				ID, err = strconv.Atoi(gAllProductIds[j])
				if err != nil {
					fmt.Println(err)
				}

				//?????????????
				//
				if prodid == ID {

					//subtract bought from quantity
					ProductQuantity = ProductQuantity - bought
					break
				}

			} //for

			//first iteration of product ids
			if i == 0 {
				Condition = 1

				//not first, so don't display message that is placed before each starting series of records by keyword
			} else {
				Condition = 0

			}
			//if on last record by keyword, display  money totals
			if i == (len(gAllProductIds) - 1) {
				Condition2 = -1
			}

			///////////////////////////////////////////////////////////////////////////////

			//int
			//ProductQuantity
			//ProductName
			//ProductCatTitle
			//$100.00
			//ProductCost
			//int
			//bought

			//GrandTotalAccumulator = 0.0

			//var test2 = .9999999999999999999
			//var test3 = .999999999999999
			
			var tax = .05;
			
			var ProductCostInt, err = strconv.Atoi(ProductCost)
			//223200
			if err != nil {
				fmt.Println(err)
			}
			
			
			
			
			
			var ProductCostFloat = float64(ProductCostInt);
			//223200

			TotalCost := ((ProductCostFloat * float64(bought) * 100)/100)
			//223200   

			//exact
			TotalCostFloat := float64(TotalCost / 100);
			//2232    
			
			
			//nothing to round, is  for one or two decimal
			TotalCostString := fmt.Sprintf("%.2f",TotalCostFloat)
			//"2232.00"

			// no dollar sign, is in template. 		
			ProductCostString := TotalCostString
			//"2232.00"	
			
			


			
			
			ProductCostFloatCopy := ProductCostFloat;
			//232200   //560
			ProductCostFloatCopy = ProductCostFloatCopy / 100;
			//2232   //5.60?
			//exact - adds zeros if needed
			forCostEach := fmt.Sprintf("%.2f",ProductCostFloatCopy)
			//"2232.00" - rounds

			//2232 - this is the sum of   - amount time price
			GrandTotalAccumulator =  GrandTotalAccumulator*100  + (TotalCostFloat * 100)
			GrandTotalAccumulator = GrandTotalAccumulator / 100;

			









			//9007199254740992 (that's 9,007,199,254,740,992 or 2^53) with no guarantees :)
			//set grand total

			
			//get tax of total: ie  .5955  (59 cents): $111.60
			GrandTotalAccumulatorWithTax := float64(((tax * 100) * ((GrandTotalAccumulator * 100))/10000))
			//111.6
			
			//round up two places, ho sales tax is administered
			GrandTotalAccumulatorWithTax =  (math.Ceil(GrandTotalAccumulatorWithTax*100)/100)
			
			
			//ie :
			GrandTotalAccumulator2 := float64(((GrandTotalAccumulatorWithTax * 100) + (GrandTotalAccumulator * 100))/100)
			//2343.6


			//add zeros after decimal point when needed
			GrandTotalString:= fmt.Sprintf("%.2f", GrandTotalAccumulator2)
			//2343.60
			//GrandTotalString = "$" + GrandTotalString

			
			/////////////////////////////////////////////////
			//this function populates a template2struct variable and appends it to productListForCartTemplate
			var OneValue= "exists";
			addProduct(OneValue ,ProductIDID, RemoveRecordDivID, GrandTotalStringID, GrandTotalString, BoughtID, bought, ProductCostString, TotalCostID, ProductQuantity, CostID, AmountToBuyID, Condition, Condition2, prodid, ProductQuantity, ProductName, DivID, ProductCatTitle, forCostEach)

		}

	} //for next loop

	//https://stackoverflow.com/questions/24755509/using-conditions-inside-templates

	//"C:/_wamp64/www/purchaseproject/cartTemplate.html
	globt = template.Must(template.ParseFiles("C:/_wamp64/www/purchaseproject/cartTemplate.html"))

	err1 = globt.Execute(w, ProductListForCartTemplate)

	if err1 != nil {

		fmt.Println(err1.Error())

	}

}

func addProduct(onevalue string, productidid string, removerecorddivID string, totalID string, total string, boughtid string, bought int, totalcost string, totalcostid string, ProductQuantity int, costid string, amountid string, condition int, condition2 int, prodid int, quant int, name string, div string, cat string, cost string) {

	prod := template2Struct{
		OneValue: onevalue,
		ProductIDID:        productidid,
		RemoveRecordDivID:  removerecorddivID,
		GrandTotalStringID: totalID,
		GrandTotalString:   total,
		BoughtID:           boughtid,
		Bought:             bought,
		TotalCost:          totalcost,
		TotalCostID:        totalcostid,
		CostID:             costid,
		AmountToBuyID:      amountid,
		Condition:          condition,
		Condition2:         condition2,
		ProductID:          prodid,
		ProductQuantity:    quant,
		ProductName:        name,
		DivID:              div,
		ProductCatTitle:    cat,
		ProductCost:        cost,
	}
	flag := "nonefound"

	//could be done better, if time allows
	for i := 0; i < len(ProductListForCartTemplate); i++ {
		if (ProductListForCartTemplate[i].ProductID) == prodid {

			//ProductList[i].ProductQuantity = ProductQuantity
			//ProductList[i].Bought = bought
			//ProductList[i].TotalCost = totalcost

			//globalFlagisVariable = "yes"
			//flag = "found"
			//i = 100
		}
	}

	if flag != "found" {

		ProductListForCartTemplate = append(ProductListForCartTemplate, prod)
		//globalFlagisVariable = "yes"
	}
}

//func indexHandler(w http.ResponseWriter, r *http.Request) {
//
//	fmt.Println("Rrrrrrraarg ")
//}

////////example:
/*

func receiveAjax(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {

		//data := r.FormValue("post_data")
		r.FormValue("post_data")
		fmt.Println("Receive ajax post data string ")

		w.Header().Add("Content-Type", "application/html")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		w.Write([]byte(string1))

	}

}
*/

type forTemplate struct {
	CondYellow      int
	Link            string
	Condition       int
	AmountPurchased int
	ProductID       int
	ProductCatTitle string
	//MainDiv         string
	TitleID string
	//ProductFilename    string
	ProductName        string
	DescID             string
	ProductDescription string
	CostID             string
	ProductCost        string
	QuantityID         string
	ProductQuantity    int
	Key1ID             string
	GKeyword1          string
	Key2ID             string
	GKeyword2          string
	Key3ID             string
	GKeyword3          string
	ProductFilename    string
	AmountToPurchaseID string
	AmountPurchasedID  string
	MainDivID          string
}

//type Name struct {
//	FName string
//	LName string
//}

//type VAR1 struct {
//	Var1 string
//}

//var templ1 = forTemplate{str3, var18, var2, var3, var4, var5, var6, var7, str4, var9, str2, var11, var12, var13, var14, var15, var16}

/*
func HelloWorld(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	var Var1 = "abc"
	var var2 = VAR1{Var1}

	globt := template.Must(template.ParseFiles("C:/wamp64/www/golangproj/twemplate1.html"))

	err1 := globt.Execute(w, var2)

	if err1 != nil {
		fmt.Println("B---------------")
		fmt.Println(err1.Error())

		panic(err1.Error())

	}

}
*/

/*


func Hello(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	name := Name{"mindorks2", "Subject2"}
	template, _ := template.ParseFiles("index2.html")
	template.Execute(w, name)
}

*/

//this function displays all the keywords in the url, these records are the records already been displayed in displayOrdersTemplate
func displayOrdersTemplateAgain(w http.ResponseWriter, r *http.Request) {

	counter1B := -1
	//GlobCounter++

	/////////

	println("testZ")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	var err1 = r.ParseForm()
	if err1 != nil {
		fmt.Fprint(w, err1)
	}

	var ProdID []string
	var keyTotalAmountBought []string
	var keyword []string
	//var UserIDstring []string

	var i = 0

	var length = len(r.Form["uid"])

	//if length > 0 {
	//	for i = 0; i < (length); i++ {
	//
	//		UserIDstring = append(UserIDstring, []string{r.Form["uid"][i]}...)
	//
	//	}
	//
	//} else {
	//
	//}
	//var is keyword
	//16900
	length = len(r.Form["var"])
	if length > 0 {
		for i = 0; i < (length); i++ {

			keyword = append(keyword, []string{r.Form["var"][i]}...)
		}

		var themaxlength = len(keyword)
		fmt.Println(themaxlength)

	}
	// else {
	//
	//	}

	length = len(r.Form["id"])
	if length > 0 {

		for i = 0; i < (length); i++ {

			ProdID = append(ProdID, []string{r.Form["id"][i]}...)
			keyTotalAmountBought = append(keyTotalAmountBought, []string{r.Form["amtTryingToPurchase"][i]}...)

		}

	}
	//else {

	//}

	//UID, err := strconv.Atoi(UserIDstring[0])
	//if err != nil {
	//	fmt.Println(err)
	//}

	var savedProductIDs []int

	if  len(keyword) == 0  {

		return 
	}

	globKeyword := keyword[0]

	//string1 = ""

	fmt.Println("in display 2")

	db := dbConn()

	var m = 0

	//var recordCounter = 0
	for m = 0; m < len(keyword); m++ {

		//recordCounter = 0
		//////////

		globKeyword = keyword[m]

		//get records that use keywords

		stmt, err := db.Prepare("SELECT products.ProductKeyword1, products.ProductKeyword2, products.ProductKeyword3, products.ProductName, products.ProductID, " +
			"products.ProductDescription, products.ProductCost, products.ProductQuantity, products.ProductCatTitle , products.ProductFilename " +
			"FROM products WHERE " +
			"((products.ProductKeyWord1 = ?) OR " +
			"(products.ProductKeyWord2 = ?) OR (products.ProductKeyWord3 = ? )) AND products.ProductStatus = 'ready'")
		if err != nil {
			fmt.Println(err)
		}

		rows, err := stmt.Query(globKeyword, globKeyword, globKeyword)

		if err != nil {
			fmt.Fprint(w, err)
		}

		var Link = globKeyword

		var Condition1 = 0

		var flag1 = 0
		for rows.Next() {

			/////////////

			//if productID is already accounted for by another keyword go to beginning of for and try nex ProductID
			var j = 0
			for j = 0; j < len(savedProductIDs); j++ {
				//record exists already
				if ProductID == savedProductIDs[j] {
					flag1 = 1
					break
				}

			}
			if flag1 == 1 {
				Condition1--
				continue
			}
			//https://stackoverflow.com/questions/33834742/remove-and-adding-elements-to-array-in-go-lang
			savedProductIDs = append(savedProductIDs, ProductID)
			/////////////

			//recordCounter++
			//for headers of table in cart template
			Condition1++

			var ProductQuantity, CondYellow int
			var gKeyword1, gKeyword2, gKeyword3, ProductName, ProductDescription, ProductCatTitle, ProductFilename, ProductCost string

			CondYellow = 0
			//fill these variable with database entries
			err = rows.Scan(&gKeyword1, &gKeyword2, &gKeyword3, &ProductName, &ProductID, &ProductDescription, &ProductCost, &ProductQuantity, &ProductCatTitle, &ProductFilename)

			if err != nil {
				fmt.Println(err)
			}

			///////////

			var statement = ""
			//var ProductCostString = ""
			//ProductCostString = strconv.FormatFloat(ProductCost, 'f' ,0, 64)
			//var n = 0

			//////////

			//fix money amounts for different cases
			if len(ProductCost) == 2 {

				ProductCost = "0." + ProductCost
				//only ones place decimal
			} else if len(ProductCost) == 1 {

				ProductCost = "0" + "." + "0" + ProductCost

				// 3 or more digits in pennies

			} else {

				//////////

				bytes1 := ([]byte(ProductCost))

				statement = ""

				var o = 0
				for o = 0; o < len(ProductCost)-2; o++ {
					statement = statement + string(bytes1[o])
				}

				//adds the decimal
				statement = statement + "."

				fmt.Println(statement)

				//adds the change
				for o = len(ProductCost) - 2; o < len(ProductCost); o++ {
					statement = statement + string(bytes1[o])
				}

				fmt.Println(statement)

				ProductCost = statement
				//ProductCost, err = strconv.ParseFloat(ProductCostString, 64)
			}

			/////////////

			var i = 0

			var prodBoughtInt = 0

			var AmountPurchased = 0

			for i = 0; i < len(ProdID); i++ {

				prodID, err := strconv.Atoi(ProdID[i])
				if err != nil {
					fmt.Println(err)
				}
				//if database productID matches query passed in, than make record yellow and up to date
				if prodID == ProductID {

					CondYellow = 1
					prodBoughtStr := keyTotalAmountBought[i]
					prodBoughtInt, err = strconv.Atoi(prodBoughtStr)
					if err != nil {
						fmt.Println(err)
					}

					AmountPurchased = prodBoughtInt
					break
				}
			}

			counter1B = counter1B + 1

			//display orders template again
			sendToTemplate(&globKeyword, &counter1B, &w, &CondYellow, &Link, &Condition1, &AmountPurchased, &ProductID, &ProductCatTitle, &ProductName, &ProductDescription, &ProductCost, &ProductQuantity,
				&gKeyword1, &gKeyword2, &gKeyword3, &ProductFilename)

		} //row

		//json.NewEncoder(w).Encode(globKeyword)
	} //main loop

}

/////////

//var GlobCounter = -1
//var counter1 = 0

////////send to cart template
func sendToTemplate(globKeyword *string, counter1 *int, w *http.ResponseWriter, CondYellow *int, Link *string, Condition *int, AmountPurchased *int, ProductID *int, ProductCatTitle *string, ProductName *string, ProductDescription *string, ProductCost *string, ProductQuantity *int,
	gKeyword1 *string, gKeyword2 *string, gKeyword3 *string, ProductFilename *string) {
	//*counter1++
	//counter1 = 0
	str := strconv.Itoa(*counter1)

	//var inputID = "inputID" + str
	var mainDivID = "mainDivID" + str
	var titleID = "titleID" + str
	var descID = "descID" + str
	var costID = "costID" + str
	var quantityID = "quantityID" + str
	var key1ID = "key1ID" + str
	var key2ID = "key2ID" + str
	var key3ID = "key3ID" + str
	var AmountToPurchaseID = "amountID" + str
	var AmountPurchasedID = "amountPID" + str

	//AmountPurchased = 120
	//json.NewEncoder(*w).Encode(globKeyword)

	//AmountPurchased = prodBoughtInt
	templ1 := forTemplate{*CondYellow, *Link, *Condition, *AmountPurchased, *ProductID, *ProductCatTitle, titleID, *ProductName, descID, *ProductDescription, costID, *ProductCost, quantityID, *ProductQuantity,
		key1ID, *gKeyword1, key2ID, *gKeyword2, key3ID, *gKeyword3, *ProductFilename, AmountToPurchaseID, AmountPurchasedID, mainDivID}

	fmt.Println(templ1)

	globt = template.Must(template.ParseFiles("C:/_wamp64/www/purchaseproject/template1.html"))

	//err1 := globt.Execute(w, testvar)
	var err1 = globt.Execute(*w, templ1)

	if err1 != nil {
		fmt.Println("-----AAAA----------")
		fmt.Println(err1.Error())

	}
}

////////

//the purpose of this function is to display the information of the keyword sent here.
//the actual ids are stored in a database when  they have been used
//if there are no ID/Quantity ordered url parameters than the function creates a new
//record with zero value for AmountPurchased.  Otherwise there is an array of ids and
//quants at top of function.  A for loop loops through all the ids and creates displayed
//records to be displayed after the execution at end.

//this function is used when search is pressed in the index.html
/*
type geoData struct {
	Var   []string
	Id    []int
	Quant []int
	UID   int `json:"a4"`
}

type try1 struct {
}

//type geoData[4]

type display6 struct {
	Vari string `json:"username"`
}
type display5 struct {
	Var   string `json:"var"`
	Id    string `json:"id"`
	Quant string `json:"quant"`
	Uid   string `json:"uid"`
}
*/
//type Display3 struct {
//	Var int `json:"var"`
//}

///////////
//	ProdID, present3 := query["id"]
//	if !present3 || len(ProdID) == 0 {
//		fmt.Println("filters not present3")
//
//	}

//////////

func displayOrdersTemplate(w http.ResponseWriter, r *http.Request) {

	counter1A := -1
	//var savedProductIDs []int

	w.Header().Set("Access-Control-Allow-Origin", "*")

	//globaltest++
	//return

	//////
	println("testY")
	var err1 = r.ParseForm()
	if err1 != nil {
		fmt.Fprint(w, err1)
	}

	//determined by max products allowed for
	//var toAppend [10]string
	var ProdID []string
	var keyTotalAmountBought []string
	var keyword []string
	var UserIDstring []string

	var i = 0

	var length = len(r.Form["uid"])

	if length > 0 {
		for i = 0; i < (length); i++ {

			UserIDstring = append(UserIDstring, []string{r.Form["uid"][i]}...)

		}

	}

	length = len(r.Form["var"])
	if length > 0 {
		for i = 0; i < (length); i++ {

			keyword = append(keyword, []string{r.Form["var"][i]}...)

		}
	}
	

	// 13, 11, 13, 12
	length = len(r.Form["id"])

	//var j = 0
	if length > 0 {

		/////////
		for i = 0; i < (length); i++ {

		ProdID = append(ProdID, []string{r.Form["id"][i]}...)
		keyTotalAmountBought = append(keyTotalAmountBought, []string{r.Form["quant"][i]}...)
		}
	}
	//////////
	/*

		for j = 0; j < (length); j++ {
			toAppend[j] = "yes"

		}

		for j = 0; j < (length); j++ {
			for i = 0; i < (length); i++ {

				//if appended structure has data
				if r.Form["id"][i] == ProdID[j] {
					toAppend[i] = "no"

				}

			}
		}

		for i = 0; i < (length); i++ {

			if toAppend[i] == "no" {

			} else {
				ProdID = append(ProdID, []string{r.Form["id"][i]}...)
				keyTotalAmountBought = append(keyTotalAmountBought, []string{r.Form["quant"][i]}...)
			}
		}

	}*/

	//////

	var val1 = ""
	val1 = UserIDstring[0]

	var UserID int
	var err error
	if len(UserIDstring[0]) != 0 {

		//only one
		UserID, err = strconv.Atoi(val1)
		if err != nil {
			fmt.Println(err)
			fmt.Println(UserID)
		}
	} else {
		UserID = 1

	}

	globKeyword := keyword[0]

	//string1 = ""

	fmt.Println("in display 1")

	db := dbConn()

	////////

	//stmt, err := db.Prepare("SELECT products.ProductKeyword1, products.ProductKeyword2, products.ProductKeyword3, products.ProductName, products.ProductID, " +
	//		"products.ProductDescription, products.ProductCost, products.ProductQuantity, products.ProductCatTitle , products.ProductFilename " +
	//		"FROM products WHERE " +
	//		"((products.ProductKeyWord1 = ?) OR " +
	//		"(products.ProductKeyWord2 = ?) OR (products.ProductKeyWord3 = ? )) AND products.ProductStatus = 'ready'")

	/////////

	//selects many productid
	stmt, err := db.Prepare("SELECT products.ProductKeyword1, products.ProductKeyword2, products.ProductKeyword3, products.ProductName, products.ProductID, " +
		"products.ProductDescription, products.ProductCost, products.ProductQuantity, products.ProductCatTitle , products.ProductFilename " +
		"FROM products WHERE " +
		"((products.ProductKeyWord1 = ?) OR " +
		"(products.ProductKeyWord2 = ?) OR (products.ProductKeyWord3 = ? )) AND products.ProductStatus = 'ready'")
	//if err != nil {
	//
	//	}

	rows, err := stmt.Query(globKeyword, globKeyword, globKeyword)

	if err != nil {
		fmt.Fprint(w, err)
	}

	//var templ1 forTemplate

	var Link = globKeyword

	var Condition1 = 0

	var counterOfRecords = 0

	//get many productids for keyword
	for rows.Next() {

		counterOfRecords++

		//marshalFlag = "no"
		//counter1 = counter1 + 1
		Condition1++

		var ProductQuantity, CondYellow int
		var gKeyword1, gKeyword2, gKeyword3, ProductName, ProductDescription, ProductCatTitle, ProductFilename, ProductCost string //AmountToPurchaseID, AmountPurchasedID string

		CondYellow = 0
		//many prodid, get all the data here...
		err = rows.Scan(&gKeyword1, &gKeyword2, &gKeyword3, &ProductName, &ProductID, &ProductDescription, &ProductCost, &ProductQuantity, &ProductCatTitle, &ProductFilename)

		///////////

		var statement = ""

		//////////

		//add zeros for samaller numbers
		if len(ProductCost) == 2 {

			ProductCost = "0." + ProductCost
			//only ones place decimal
		} else if len(ProductCost) == 1 {

			ProductCost = "0" + "." + "0" + ProductCost

			// 3 or more digits in pennies

		} else {

			///////////set product cost up

			bytes1 := ([]byte(ProductCost))

			statement = ""

			var o = 0

			fmt.Println(length)
			for o = 0; o < len(ProductCost)-2; o++ {
				statement = statement + string(bytes1[o])
			}

			//adds the decimal
			statement = statement + "."

			fmt.Println(statement)

			//adds the change
			for o = len(ProductCost) - 2; o < len(ProductCost); o++ {
				statement = statement + string(bytes1[o])
			}

			fmt.Println(statement)

			ProductCost = statement
		}

		//////////

		////////////

		//check for duplicates, that is if productID already has been displayed don't display again
		/////////////

		var flag1 = 0
		var j = 0
		for j = 0; j < len(savedProductIDs); j++ {
			//record exists already
			if ProductID == savedProductIDs[j] {
				flag1 = 1
				break
			}

		}
		if flag1 == 1 {
			Condition1--
			continue
		}
		//https://stackoverflow.com/questions/33834742/remove-and-adding-elements-to-array-in-go-lang
		savedProductIDs = append(savedProductIDs, ProductID)

		prodBoughtInt := 0

		var AmountPurchased = 0

		//set amountPurchased
		for i = 0; i < len(ProdID); i++ {

			///

			prodIDStr := ProdID[i]

			prodIDInt, err := strconv.Atoi(prodIDStr)
			if err != nil {
				fmt.Println(err)
				fmt.Println(prodIDInt)
			}

			//prodidint is from query, productdID is from database
			if ProductID == prodIDInt {
				if err != nil {
					//fmt.Println(ProdIDStr)
				}

				prodBoughtStr := keyTotalAmountBought[i]
				prodBoughtInt, err = strconv.Atoi(prodBoughtStr)
				if err != nil {
					fmt.Println(err)

				}
				AmountPurchased = prodBoughtInt

				break
			}
		}

		//send to twmplate that displays orders
		//fix this, here, done
		counter1A++
		sendToTemplate(&globKeyword, &counter1A, &w, &CondYellow, &Link, &Condition1, &AmountPurchased, &ProductID, &ProductCatTitle, &ProductName, &ProductDescription, &ProductCost, &ProductQuantity,
			&gKeyword1, &gKeyword2, &gKeyword3, &ProductFilename)

	}
}

//////////

/////////////

/*
//send from client to server and
//send form server to client
//this is a good example
func getMessages(w http.ResponseWriter, r *http.Request) {

	w.Header().Add("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	type User struct {
		Name string
		Age  int
		City string
	}

	//	a := User{Name:"a" , Age: 10 , City:"s" };

	var user = []User{{

		Name: "John Doe",
		Age:  10,
		City: "richmond"}}

	var msg = new(User)
	msg.Name = "Test namee"
	msg.Age = 30
	msg.City = "here"
	user = append(user, *msg)

	msg = new(User)
	msg.Name = "namee"
	msg.Age = 20
	msg.City = "here2"
	user = append(user, *msg)

	json.NewEncoder(w).Encode(user)

	//w.Header().Set("Content-Type", "application/json")
	//w.Write(j)
	fmt.Println("--wwww---")
	fmt.Println(user)
}

*/
////test//
////////////

/////////////
func home(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Hello from Snippetbox")
}

func main() {

	//fmt.Println("this is a test!")
	
	
	//fmt.Println("this is a test!3")
	one := http.NewServeMux()
	//one.HandleFunc("/", home)

	//has an id value passed in url
	//one.HandleFunc("/updateForm/", updateForm)

	//button3 - just read session for right now
	//one.HandleFunc("/getMessages", getMessages)

	//second parameter is function in main.go
	one.HandleFunc("/displayOrderFormFromTemplate", displayOrdersTemplate)

	one.HandleFunc("/displayOrdersTemplateAgain", displayOrdersTemplateAgain)

	//one.HandleFunc("/HelloWorld", HelloWorld)
	one.HandleFunc("/processLogin", processLogin)

	//two := http.NewServeMux()

	//
	one.HandleFunc("/cartTemplate", createCartTemplate)
	one.HandleFunc("/sendBackNewCartData", sendBackNewCartData)

	fmt.Println("this is a test1!")

	
	//fmt.Println(serverErr)
	fmt.Println("this is a test2!")
	serverErr := http.ListenAndServe(":8080", one)
	fmt.Println(serverErr)

}
