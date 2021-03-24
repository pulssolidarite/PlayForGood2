import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRiotComponent } from './menu-riot.component';

describe('MenuRiotComponent', () => {
  let component: MenuRiotComponent;
  let fixture: ComponentFixture<MenuRiotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRiotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
