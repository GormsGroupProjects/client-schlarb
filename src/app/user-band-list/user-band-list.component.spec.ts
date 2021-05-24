import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBandListComponent } from './user-band-list.component';

describe('UserBandListComponent', () => {
  let component: UserBandListComponent;
  let fixture: ComponentFixture<UserBandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBandListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
