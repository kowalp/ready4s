import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  apiAddress: string = `https://api.exchangeratesapi.io/`;

  constructor(private httpClient: HttpClient) {}

  getCurrencyData(base: string, symbols: string) {
    return this.httpClient.get<any>(this.apiAddress + 'latest', {
      params: { symbols, base },
    });
  }
  getHistoricalData(start_at: string, end_at: string, symbols: string) {
    return this.httpClient
      .get<any>(`${this.apiAddress}history`, {
        params: { start_at, end_at, symbols },
      })
      .pipe(
        map((item) => {
          item.series = [];
          item.name = 'PLN';
          let a = 0;
          for (const key in item.rates) {
            if (key) {
              item.series.push({
                name: new Date(key),
                value: item.rates[key].PLN,
              });
              a++;
            }
          }
          return item;
        })
      );
  }
}
