import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ProductPageComponent } from './product-page.component';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1,
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
