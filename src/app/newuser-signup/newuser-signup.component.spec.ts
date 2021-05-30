import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserSignupComponent } from './newuser-signup.component';


describe('NewuserSignupComponent', () => {
  let component: NewuserSignupComponent;
  let fixture: ComponentFixture<NewuserSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewuserSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewuserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
