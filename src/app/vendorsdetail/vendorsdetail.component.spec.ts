import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsdetailComponent } from './vendorsdetail.component';

describe('VendorsdetailComponent', () => {
  let component: VendorsdetailComponent;
  let fixture: ComponentFixture<VendorsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
