import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditionsComponent } from './list-editions.component';

describe('ListEditionsComponent', () => {
  let component: ListEditionsComponent;
  let fixture: ComponentFixture<ListEditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
