import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderElipsisComponent } from './loader-elipsis.component';

describe('LoaderElipsisComponent', () => {
  let component: LoaderElipsisComponent;
  let fixture: ComponentFixture<LoaderElipsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderElipsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderElipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
