import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutSweetComponent } from './default-layout-sweet.component';

describe('DefaultLayoutSweetComponent', () => {
  let component: DefaultLayoutSweetComponent;
  let fixture: ComponentFixture<DefaultLayoutSweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutSweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
