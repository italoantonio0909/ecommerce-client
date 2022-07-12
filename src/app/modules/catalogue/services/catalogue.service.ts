import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductPaginate } from '../entities/Product';
import { getUrl } from 'src/app/helpers';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

  catalogueProductPaginate(limit: number, startAfter: number): Observable<ProductPaginate> {
    return this.http.get<ProductPaginate>(`${getUrl()}/api/products/${limit}/${startAfter}`)
      .pipe(map((e) => e))
  }

}
