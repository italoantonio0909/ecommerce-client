import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPanelComponent } from './shopping-cart-panel.component';

describe('ShoppingCartPanelComponent', () => {
  let component: ShoppingCartPanelComponent;
  let fixture: ComponentFixture<ShoppingCartPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
