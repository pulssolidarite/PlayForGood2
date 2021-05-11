import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPfg2Component } from './about-pfg2.component';

describe('AboutPfg2Component', () => {
  let component: AboutPfg2Component;
  let fixture: ComponentFixture<AboutPfg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPfg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPfg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
