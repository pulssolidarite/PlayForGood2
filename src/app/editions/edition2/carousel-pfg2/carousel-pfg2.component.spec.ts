import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPfg2Component } from './carousel-pfg2.component';

describe('CarouselPfg2Component', () => {
  let component: CarouselPfg2Component;
  let fixture: ComponentFixture<CarouselPfg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPfg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPfg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
