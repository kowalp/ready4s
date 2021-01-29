import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangingRateCarouselComponent } from './exchanging-rate-carousel.component';

describe('ExchangingRateCarouselComponent', () => {
  let component: ExchangingRateCarouselComponent;
  let fixture: ComponentFixture<ExchangingRateCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangingRateCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangingRateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
