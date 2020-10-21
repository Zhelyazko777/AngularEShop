import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './feature/products/products.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { layoutReducer } from './store/reducers/layout.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    ProductsModule,
    StoreModule.forRoot({
      layout: layoutReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
