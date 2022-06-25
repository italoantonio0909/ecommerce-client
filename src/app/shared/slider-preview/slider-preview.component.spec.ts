import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPreviewComponent } from './slider-preview.component';

describe('SliderPreviewComponent', () => {
  let component: SliderPreviewComponent;
  let fixture: ComponentFixture<SliderPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
