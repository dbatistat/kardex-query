import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductSchema } from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product/product.controller';
import { ListHandler } from './product/product.handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forRoot('mongodb+srv://pharol:pharol@pharoldb-eyxl9.gcp.mongodb.net/kardex?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}]),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ListHandler ],
})
export class AppModule {}
