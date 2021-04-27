import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';
import { CartPageComponent } from './cart-page.component';
import { BehaviorSubject } from 'rxjs';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  // 1. should create the order service mock.
  const orderServiceMock = {
    SaveOrder: jasmine.createSpy('SaveOrder').and.callFake(() => {}),
  };

  // 2. should create the cart service mock.
  const cartServiceMock = {
    products$: new BehaviorSubject([]),
    clearCart: jasmine.createSpy('clearCart').and.callFake(() => {}),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPageComponent],
      // 1. should add in provider Order service with it's mock.
      // 2. should add in provider Cart service with it's mock.
      providers: [
        {
          provide: OrderService,
          useValue: orderServiceMock,
        },
        {
          provide: CartService,
          useValue: cartServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1. afterEach should reset the functions inside the mocks.
  afterEach(() => {
    cartServiceMock.clearCart.calls.reset();
    orderServiceMock.SaveOrder.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handleSubmit', () => {
    component.handleSubmit();
    // 1. should check that save order was called.
    expect(orderServiceMock.SaveOrder).toHaveBeenCalled();

    // 2. should check that clear cart was called.
    expect(cartServiceMock.clearCart).toHaveBeenCalled();
  });
});
