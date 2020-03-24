import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListQuery } from './list.query';
import { Product } from './product.interface';

@QueryHandler(ListQuery)
export class ListHandler implements IQueryHandler<ListQuery> {
    constructor(@InjectModel('Product') private productModel: Model<Product>) {
    }

    async execute(query: ListQuery): Promise<Product[]> {
        return this.productModel.find({ query }).exec();
    }
}
