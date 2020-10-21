import { BaseModel } from './base-model';

export class CollectionResponse<TModel extends BaseModel> {
    items: TModel[];
}
