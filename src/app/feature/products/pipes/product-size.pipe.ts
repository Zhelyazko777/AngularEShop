import { Pipe, PipeTransform } from '@angular/core';
import { ProductSizeEnum } from 'src/app/core/enums/product-size-enum';

@Pipe({
  name: 'productSize'
})
export class ProductSizePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case ProductSizeEnum.L:
        return 'L';
      case ProductSizeEnum.M:
        return 'M';
      case ProductSizeEnum.S:
        return 'S';
      case ProductSizeEnum.XL:
        return 'XL';
      default:
        return null;
    }
  }

}
