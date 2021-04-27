import { TestBed } from '@angular/core/testing';
import { Mock } from 'protractor/built/driverProviders';
import { Order } from '../types';
import { OrderService } from './order.service';

const orderMock = [
  {
    date: new Date(),
    products: [
      {
        price: 1,
      },
    ],
  },
];

describe('OrdersService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save the order', () => {
    // 1. call method SaveOrder from service with params products, shippingAddress
    // 2. mock setItem from localStorage
    const mockSetItem = spyOn(localStorage, 'setItem').and.callThrough();
    service.SaveOrder([], 'test');
    // 3. expect Mock to have been called
    expect(mockSetItem).toHaveBeenCalled();
  });
  it('should get all orders', () => {
    const mockGetItem = spyOn(localStorage, 'getItem').and.callFake(() =>
      JSON.stringify(orderMock)
    );
    // 1. call method GetAllOrders from service;
    const orders = service.GetAllOrders();
    // 2.  mock getItem from localStorage;
    expect(orders).toEqual([
      { date: new Date(orderMock[0].date), numberOfProducts: 1, orderTotal: 1 },
    ]);
  });
});
