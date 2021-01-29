import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ExchangingRateCarouselComponent } from './main/components/exchanging-rate-carousel/exchanging-rate-carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
@NgModule({
  declarations: [AppComponent, ExchangingRateCarouselComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    NguCarouselModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
