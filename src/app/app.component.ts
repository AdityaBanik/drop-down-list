import {  Component, OnInit, inject } from '@angular/core';
import { ProductsService } from './services/products.service';
import { LazyLoadEvent } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private productService = inject(ProductsService);

  title = 'Drop Down Menu';
  products: any = [];
  selectedProduct = ''
  limit = 50
  loading = false;

  ngOnInit() {
    this.loadProducts(this.limit, 0);
  }

  loadProducts(limit: number, offset: number) {
    this.loading=true;
    this.productService.getProducts(limit, offset).subscribe(data => {
      this.products = [...this.products, ...data.blogs]
        this.loading = false; 
    });
    
  }

  lazyLoadProducts(event: LazyLoadEvent) {
    // Load data of required page using the actual service
    if (event.last! - event.first! === 13 && this.products.length < 1000 && !this.loading) {
      this.loadProducts(this.limit, this.products.length);
    }
  }
}