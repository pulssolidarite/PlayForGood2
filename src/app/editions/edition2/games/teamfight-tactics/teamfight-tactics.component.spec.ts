import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamfightTacticsComponent } from './teamfight-tactics.component';

describe('TeamfightTacticsComponent', () => {
  let component: TeamfightTacticsComponent;
  let fixture: ComponentFixture<TeamfightTacticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamfightTacticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamfightTacticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
