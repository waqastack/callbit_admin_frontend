import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbitAmountComponent } from './callbit-amount.component';

describe('CallbitAmountComponent', () => {
  let component: CallbitAmountComponent;
  let fixture: ComponentFixture<CallbitAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbitAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbitAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
