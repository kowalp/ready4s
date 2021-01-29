import { CurrencyService } from './../../../shared/services/currency.service';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'historical-chart',
  templateUrl: './historical-chart.component.html',
  styleUrls: ['./historical-chart.component.scss'],
})
export class HistoricalChartComponent {
  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'EUR TO PLN';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(
    private currencyService: CurrencyService,
    private datePipe: DatePipe
  ) {
    this.currencyService
      .getHistoricalData(
        '2010-01-01',
        this.datePipe.transform(Date.now(), 'yyyy-MM-dd'),
        'PLN'
      )
      .subscribe((data) => {
        this.multi = [data];
        console.log(this.multi);
      });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
