import { BaseModel } from './base-model';
import { ProductSizeEnum } from './../enums/product-size-enum';

export class Product extends BaseModel {
    title: string;
    price: number;
    promotionalPrice: number;
    rating: number;
    description: string;
    availableSizes: ProductSizeEnum[];
    facebookLink: string;
    twitterLink: string;
    pinterestLink: string;
    youtubekLink: string;
    instagramLink: string;
}
