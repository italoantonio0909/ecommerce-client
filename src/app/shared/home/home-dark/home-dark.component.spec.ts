import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDarkComponent } from './home-dark.component';

describe('HomeDarkComponent', () => {
  let component: HomeDarkComponent;
  let fixture: ComponentFixture<HomeDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
