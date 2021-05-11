import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramPfg2Component } from './program-pfg2.component';

describe('ProgramPfg2Component', () => {
  let component: ProgramPfg2Component;
  let fixture: ComponentFixture<ProgramPfg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramPfg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramPfg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
