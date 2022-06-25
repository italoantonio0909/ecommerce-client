import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSweetComponent } from './home-sweet.component';

describe('HomeSweetComponent', () => {
  let component: HomeSweetComponent;
  let fixture: ComponentFixture<HomeSweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
