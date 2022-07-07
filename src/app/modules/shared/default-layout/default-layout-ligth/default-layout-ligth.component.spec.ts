import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutLigthComponent } from './default-layout-ligth.component';

describe('DefaultLayoutLigthComponent', () => {
  let component: DefaultLayoutLigthComponent;
  let fixture: ComponentFixture<DefaultLayoutLigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutLigthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutLigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
