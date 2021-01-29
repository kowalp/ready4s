import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartRoutingModule } from './chart-routing,module';

import { HistoricalChartComponent } from './components/historical-chart/historical-chart.component';
@NgModule({
  declarations: [
    HistoricalChartComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    NgxChartsModule
  ],
  providers: [DatePipe],
})
export class ChartModule { }
