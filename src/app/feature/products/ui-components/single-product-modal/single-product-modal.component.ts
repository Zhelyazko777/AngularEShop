import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductSizeEnum } from 'src/app/core/enums/product-size-enum';

@Component({
  selector: 'app-single-product-modal',
  templateUrl: './single-product-modal.component.html',
  styleUrls: ['./single-product-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleProductModalComponent {

  @Input()
  product: Product;

  @Output()
  modalClose: EventEmitter<void> = new EventEmitter<void>();

  socialToggle = true;
  selectedSize: ProductSizeEnum;

  constructor() { }

  get isThereAnySocialLinks(): boolean {
    return Boolean(this.product.facebookLink ||
        this.product.twitterLink ||
        this.product.pinterestLink ||
        this.product.instagramLink ||
        this.product.youtubekLink);
  }

  onCloseBtnClick(): void {
    this.product = undefined;
    this.socialToggle = true;
    this.selectedSize = undefined;
    this.modalClose.emit();
  }

  onAddToCartBtnClick(): void {
    // for now just close the modal
    this.onCloseBtnClick();
  }

  onSocialIconsToggle(): void {
    this.socialToggle = !this.socialToggle;
  }

  onProductSizeClick(size: ProductSizeEnum): void {
    this.selectedSize = size;
  }
}
