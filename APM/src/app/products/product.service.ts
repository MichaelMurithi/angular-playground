import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators/';
/**
 * To add an observable to our service, we use the HttpClient to fetch data
 * We import Observable from 'rxjs' library
 * The returned value should be an object of type observable but we add a generic type <Iproduct> </Iproduct> because it represents an array of products
 * The Injectable Is a decorator used to create dependencies.

 @returns an observable to manage the list of products
 */
@Injectable({
  providedIn: 'root',
}) //Injectable decorator is used to make a service.
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productUrl)
      .pipe(tap((data) => console.log('All: ', JSON.stringify(data))));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
  }
}
