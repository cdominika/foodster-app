import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineListingComponent } from './cuisine-listing.component';

describe('CuisineListingComponent', () => {
  let component: CuisineListingComponent;
  let fixture: ComponentFixture<CuisineListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisineListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
