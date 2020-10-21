import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';



@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    ProductsService,
  ],
})
export class CoreModule {
  // prevent Core module from importing more than once in the app if we add routing and lazy loading
  constructor(@Optional() @SkipSelf() module?: CoreModule) {
    if (module) {
      throw new Error('CoreModule has already been loaded!');
    }
  }
}
