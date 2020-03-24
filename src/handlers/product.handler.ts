import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListQuery } from '../queries/list.query';
import { Product } from '../interfaces/product.interface';

@QueryHandler(ListQuery)
export class ListHandler implements IQueryHandler<ListQuery> {
    constructor(@InjectModel('Product') private productModel: Model<Product>) {
    }

    async execute(): Promise<Product[]> {
        return this.productModel.find().exec();
    }
}
