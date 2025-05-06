import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentInRealEstateFundsComponent } from './investment-in-real-estate-funds.component';

describe('InvestmentInRealEstateFundsComponent', () => {
  let component: InvestmentInRealEstateFundsComponent;
  let fixture: ComponentFixture<InvestmentInRealEstateFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentInRealEstateFundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentInRealEstateFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
