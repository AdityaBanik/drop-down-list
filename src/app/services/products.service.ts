// Import necessary modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'https://api.slingacademy.com'; 

  constructor(private http: HttpClient) {}

  // Define a method for making the GET request with query parameters
  getProducts(limit: number, offset: number): Observable<any> {
    // Create HttpParams to set query parameters
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString());

    // Make the GET request with the specified query parameters
    return this.http.get(`${this.baseUrl}/v1/sample-data/blog-posts`, { params });
  }
}