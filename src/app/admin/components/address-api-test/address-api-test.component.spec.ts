import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressApiTestComponent } from './address-api-test.component';

describe('AddressApiTestComponent', () => {
  let component: AddressApiTestComponent;
  let fixture: ComponentFixture<AddressApiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressApiTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressApiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
