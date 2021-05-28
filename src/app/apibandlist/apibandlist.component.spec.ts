import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApibandlistComponent } from './apibandlist.component';

describe('ApibandlistComponent', () => {
  let component: ApibandlistComponent;
  let fixture: ComponentFixture<ApibandlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApibandlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApibandlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
