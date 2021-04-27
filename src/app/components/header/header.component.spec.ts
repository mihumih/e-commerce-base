import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartService } from '../../services/cart.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const cartServiceMock = {
    products$: new BehaviorSubject([]),
    addToCart: jasmine.createSpy('addToCart').and.callFake((value) => {
      cartServiceMock.products$.next(value);
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: CartService,
          useValue: cartServiceMock,
        },
      ],
      imports: [MatMenuModule, MatToolbarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    cartServiceMock.addToCart.calls.reset();
  });

  it('should subscribe to cart products', () => {
    component.ngOnInit();
    cartServiceMock.addToCart([1, 2, 3]);

    expect(component.products.length).toBe(3);
  });
});
