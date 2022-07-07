import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLigthComponent } from './home-ligth.component';

describe('HomeLigthComponent', () => {
  let component: HomeLigthComponent;
  let fixture: ComponentFixture<HomeLigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLigthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
