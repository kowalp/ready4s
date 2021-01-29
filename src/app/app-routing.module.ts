import { ExchangingRateCarouselComponent } from './main/components/exchanging-rate-carousel/exchanging-rate-carousel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExchangingRateCarouselComponent,
  },
  {
    pathMatch: 'full',
    path: 'chart',
    loadChildren: () =>
      import('./chart/chart.module').then((m) => m.ChartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
