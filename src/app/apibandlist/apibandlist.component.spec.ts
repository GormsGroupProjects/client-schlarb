import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpTestingController} from "@angular/common/http/testing";

import { ApibandlistComponent } from './apibandlist.component';

describe('ApibandlistComponent', () => {
  let component: ApibandlistComponent;
  let fixture: ComponentFixture<ApibandlistComponent>;
  let httpMock: HttpTestingController; // It is basically a mock version of the HTTPClient used for testing purposes. 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpTestingController],
      providers:[ApibandlistComponent],
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
