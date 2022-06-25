import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSweetComponent } from './header-sweet.component';

describe('HeaderSweetComponent', () => {
  let component: HeaderSweetComponent;
  let fixture: ComponentFixture<HeaderSweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
