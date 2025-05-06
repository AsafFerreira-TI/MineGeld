import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatodinComponent } from './patodin.component';

describe('PatodinComponent', () => {
  let component: PatodinComponent;
  let fixture: ComponentFixture<PatodinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatodinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatodinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
