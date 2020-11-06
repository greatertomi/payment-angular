import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paystack2Component } from './paystack2.component';

describe('Paystack2Component', () => {
  let component: Paystack2Component;
  let fixture: ComponentFixture<Paystack2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paystack2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paystack2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
