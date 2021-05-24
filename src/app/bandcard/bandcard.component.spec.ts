import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandcardComponent } from './bandcard.component';

describe('BandcardComponent', () => {
  let component: BandcardComponent;
  let fixture: ComponentFixture<BandcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
