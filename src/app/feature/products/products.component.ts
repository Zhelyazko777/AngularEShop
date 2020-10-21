import { AppState } from './../../store/app-state';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/models/product';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as LayoutActions from './../../store/actions/layout.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products$: Observable<Product[]>;
  singleProduct: Product;

  constructor(public productsService: ProductsService, public store: Store<AppState>) {
    this.products$ = this.productsService.getAll().pipe(map(p => p.items));
  }

  onCardClick(productId: number): void {
    this.fetchSingleProduct(productId);
  }

  onModalClose(): void {
    this.singleProduct = undefined;
    this.store.dispatch(new LayoutActions.ToggleModalAction(false));
  }

  private fetchSingleProduct(id: number): void {
    // Here I don't unsubscribe from the observable, beacause it's just an HTTP call which doesn't require unsubscribing
    this.productsService.getById(id).subscribe(product => {
      this.singleProduct = product;
      this.store.dispatch(new LayoutActions.ToggleModalAction(true));
    });
  }
}
