import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAndExpenseManagementComponent } from './income-and-expense-management.component';

describe('IncomeAndExpenseManagementComponent', () => {
  let component: IncomeAndExpenseManagementComponent;
  let fixture: ComponentFixture<IncomeAndExpenseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeAndExpenseManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeAndExpenseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
