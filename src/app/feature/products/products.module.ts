import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './ui-components/product-card/product-card.component';
import { SingleProductModalComponent } from './ui-components/single-product-modal/single-product-modal.component';
import { ProductSizePipe } from './pipes/product-size.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    SingleProductModalComponent,
    ProductSizePipe
  ],
  imports: [
    SharedModule,
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
