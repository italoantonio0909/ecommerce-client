import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLigthComponent } from './header-ligth.component';

describe('HeaderLigthComponent', () => {
  let component: HeaderLigthComponent;
  let fixture: ComponentFixture<HeaderLigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLigthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
