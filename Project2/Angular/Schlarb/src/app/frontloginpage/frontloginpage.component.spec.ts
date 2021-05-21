import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontloginpageComponent } from './frontloginpage.component';

describe('FrontloginpageComponent', () => {
  let component: FrontloginpageComponent;
  let fixture: ComponentFixture<FrontloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontloginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
