import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisePageComponent } from './cruise-page.component';

describe('CruisePageComponent', () => {
  let component: CruisePageComponent;
  let fixture: ComponentFixture<CruisePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruisePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
