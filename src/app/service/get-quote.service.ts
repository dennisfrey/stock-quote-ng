import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';

const url: string = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=";
const urlDaily: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
const options: string = "&outputsize=compact"
const apiKey:string = "&apikey=EGQYKVZ1XQFB9SQH";

@Injectable({
  providedIn: 'root'
})
export class GetQuoteService {

  constructor(private http: HttpClient) { }

  get(symbol: string): Observable<JsonResponse> {
    return this.http.get(url+symbol+apiKey) as Observable<JsonResponse>;
  }
  getDaily(symbol: string): Observable<JsonResponse> {
    return this.http.get(urlDaily+symbol+options+apiKey) as Observable<JsonResponse>;
  }
}