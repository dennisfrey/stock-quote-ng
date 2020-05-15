import { Component, OnInit } from '@angular/core';
import { GetQuoteService } from 'src/app/service/get-quote.service';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {
  stock: string = "";
  displaySean: boolean  = false;
  displayTrevor: boolean = false;

  // Detailed Quote Properties
  displayQuote: boolean = false;
  symbol: string = "";
  open: string = "";
  high: string = "";
  low: string = "";
  price: number = 0;
  volume: string = "";
  latestTradingDay: string = "";
  previousClose: string = "";
  change: number = 0;
  changePercent: number = 0;

  // History Properties
  displayHistory: boolean = false;
  symbolHistory: string = "";
  price1: number = 0;
  price2: number = 0;
  price3: number = 0;
  price4: number = 0;
  price5: number = 0;
  price6: number = 0;
  price7: number = 0;
  price8: number = 0;
  price9: number = 0;
  price10: number = 0;

  constructor(private getQuoteSvc: GetQuoteService) { }
 
  ngOnInit(): void {
  }

  getQuote(): void {
    if (this.stock == "sean" || this.stock == "SEAN") {
      this.displaySean = true;
      this.displayQuote = false;
      this.displayHistory = false;
      this.displayTrevor = false;
    }
    else if(this.stock == "trev" || this.stock == "TREV"){
      this.displayTrevor = true;
      this.displaySean = false;
      this.displayQuote = false;
      this.displayHistory = false;
    }
    else {
    this.symbol = "";
    this.displayQuote = true;
    this.displayHistory = false;
    this.displayTrevor = false;
    this.displaySean = false;
    this.getQuoteSvc.get(this.stock).subscribe(jr => {
        console.log(jr);
        let quote = jr["Global Quote"];
        this.symbol = quote["01. symbol"];
        this.open = quote["02. open"];
        this.high = quote["03. high"];
        this.low = quote["04. low"];
        this.price = quote["05. price"];
        this.volume = quote["06. volume"];
        this.latestTradingDay = quote["07. latest trading day"];
        this.previousClose = quote["08. previous close"];
        this.change = quote["09. change"];
        this.changePercent = quote["10. change percent"];
      });
    }
  }

  getPriceHistory(): void {
    this.symbolHistory = "";
    this.displayQuote = false;
    this.displayHistory = true;
    this.displayTrevor = false;
    this.displaySean = false;
    this.getQuoteSvc.getDaily(this.stock).subscribe( jr => {
      console.log(jr);
      this.symbolHistory = jr["Meta Data"]["2. Symbol"];
      this.price1 = jr["Time Series (Daily)"]["2020-05-14"]["4. close"];
      this.price2 = jr["Time Series (Daily)"]["2020-05-13"]["4. close"];
      this.price3 = jr["Time Series (Daily)"]["2020-05-12"]["4. close"];
      this.price4 = jr["Time Series (Daily)"]["2020-05-11"]["4. close"];
      this.price5 = jr["Time Series (Daily)"]["2020-05-08"]["4. close"];
      this.price6 = jr["Time Series (Daily)"]["2020-05-07"]["4. close"];
      this.price7 = jr["Time Series (Daily)"]["2020-05-06"]["4. close"];
      this.price8 = jr["Time Series (Daily)"]["2020-05-05"]["4. close"];
      this.price9 = jr["Time Series (Daily)"]["2020-05-04"]["4. close"];
      this.price10 = jr["Time Series (Daily)"]["2020-05-01"]["4. close"];

     });
  }

}
