import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePlanetsComponent } from './favourite-planets.component';

describe('FavouritePlanetsComponent', () => {
  let component: FavouritePlanetsComponent;
  let fixture: ComponentFixture<FavouritePlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritePlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritePlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
