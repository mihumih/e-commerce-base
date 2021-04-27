import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../../services/cart.service';
import { ProductMinicartComponent } from './product-minicart.component';

describe('ProductMinicartComponent', () => {
  let component: ProductMinicartComponent;
  let fixture: ComponentFixture<ProductMinicartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductMinicartComponent],
      providers: [CartService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMinicartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
