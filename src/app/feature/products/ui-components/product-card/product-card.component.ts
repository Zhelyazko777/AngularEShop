import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  @Input()
  product: Product;

  constructor() { }
}
