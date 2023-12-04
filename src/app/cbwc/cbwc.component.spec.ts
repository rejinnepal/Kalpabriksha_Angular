import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbwcComponent } from './cbwc.component';

describe('CbwcComponent', () => {
  let component: CbwcComponent;
  let fixture: ComponentFixture<CbwcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbwcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
