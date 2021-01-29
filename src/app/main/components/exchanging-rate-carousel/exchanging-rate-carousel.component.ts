import { CurrencyService } from './../../../shared/services/currency.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, startWith, take, tap } from "rxjs/operators";
import { CurrencyData } from '../../interfaces/currency.interface';
import { NguCarouselConfig } from '@ngu/carousel';
import { Observable, interval } from 'rxjs';
@Component({
  selector: 'exchanging-rate-carousel',
  templateUrl: './exchanging-rate-carousel.component.html',
  styleUrls: ['./exchanging-rate-carousel.component.scss'],
})
export class ExchangingRateCarouselComponent implements OnInit, OnDestroy {
  carouselData = [
    {
      img: 'https://placekitten.com/g/200/300',
      data: {base: "EUR", symbol: "PLN" }
    },
    {
      img: 'http://placekitten.com/200/300',
      data: {base: "USD", symbol: "GBP" }
    },
    {
      img: 'https://placekitten.com/g/200/300',
      data: {base: "CAD", symbol: "CHF" }
    }
  ];
  currentSlide: number = 0;
  data: Array<CurrencyData> = [];
  carouselTileItems$: Observable<any[]>;
  interval: number;

  constructor(private currencyService: CurrencyService, private _cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(1),
      map(() => {
        this.carouselData.forEach(item => {this.getCurrency(item.data.base, item.data.symbol)})
        return [...this.carouselData];
      })
    );
    this.interval = <any>setInterval(() => {
      this.moveToRight();
    }, 3000);
  }


  getCurrency(base: string, symbol: string) {
    return this.currencyService.getCurrencyData(base, symbol)
      .pipe(tap((data: CurrencyData) => {
        if(!this.data.length)  {
          this.pushData(base, symbol, data);
        }
        for (let i in this.data) {
          if (this.data[i].base === base && this.data[i].symbol === symbol) {
            this.data[i].value = data.rates[symbol];
            break;
          } else if(this.carouselData.length > this.data.length) {
            this.pushData(base, symbol, data);
          }
        }
      })).subscribe();
  }

  pushData(base: string, symbol: string, data: CurrencyData): void {
    this.data.push({
      base,
      symbol,
      value: data.rates[symbol],
      date: data.date,
    })
  }

  moveToRight() {
    if (this.currentSlide === this.carouselData.length - 1){
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
    this.getCurrency(this.carouselData[this.currentSlide].data.base, this.carouselData[this.currentSlide].data.symbol)
  }
  moveToLeft() {
    if (this.currentSlide === 0){
      this.currentSlide = this.carouselData.length - 1
    } else {
      this.currentSlide--;
    }
    this.getCurrency(this.carouselData[this.currentSlide].data.base, this.carouselData[this.currentSlide].data.symbol)
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
