import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendsOfRuneterraComponent } from './legends-of-runeterra.component';

describe('LegendsOfRuneterraComponent', () => {
  let component: LegendsOfRuneterraComponent;
  let fixture: ComponentFixture<LegendsOfRuneterraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendsOfRuneterraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendsOfRuneterraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
