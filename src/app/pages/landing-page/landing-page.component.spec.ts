import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvent } from '@angular/material/paginator';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  const productServiceMock = {
    getProducts: jasmine
      .createSpy('getProducts')
      .and.callFake(() => of([1, 2, 3])),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      providers: [
        {
          provide: ProductService,
          useValue: productServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get products', () => {
    component.getProducts(0 as any);
    // 1. Mock productService
    //  2. Mock getProducts
    //  3. Call getProducts method from component
    //  4. Expect that we have products
    expect(productServiceMock.getProducts).toHaveBeenCalled();
    expect(component.products.length).toEqual(3);
  });
});
