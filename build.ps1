

browserify main1.js -o currencyBundle.js -d
browserify currencySecondToBundle.js -o currencyBundle2.js -d
browserify sumTotalsThirdBundle.js -o currencyBundle3.js -d 
Write-Host "Successfull - starts running!"
go build main.go
go run main.go


