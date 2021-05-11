import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPfg2Component } from './footer-pfg2.component';

describe('FooterPfg2Component', () => {
  let component: FooterPfg2Component;
  let fixture: ComponentFixture<FooterPfg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPfg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPfg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
