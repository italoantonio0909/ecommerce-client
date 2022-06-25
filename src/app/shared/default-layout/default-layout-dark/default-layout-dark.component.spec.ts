import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutDarkComponent } from './default-layout-dark.component';

describe('DefaultLayoutDarkComponent', () => {
  let component: DefaultLayoutDarkComponent;
  let fixture: ComponentFixture<DefaultLayoutDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
