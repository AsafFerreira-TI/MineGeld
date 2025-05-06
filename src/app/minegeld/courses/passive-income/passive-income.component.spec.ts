import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveIncomeComponent } from './passive-income.component';

describe('PassiveIncomeComponent', () => {
  let component: PassiveIncomeComponent;
  let fixture: ComponentFixture<PassiveIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassiveIncomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassiveIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
