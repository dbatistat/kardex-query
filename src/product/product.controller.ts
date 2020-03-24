import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { Get, Controller, Query, Res, HttpStatus } from '@nestjs/common';
import { ListQuery } from './list.query';

@Controller('products')
export class ProductController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus) { }

    @Get()
    public async getAll(
        @Query() request: ListQuery,
        @Res() response,
    ) {
        const list = await this.queryBus.execute(
            new ListQuery(
                request.page,
                request.pageSize,
            ));
        response.status(HttpStatus.OK).json(list);
    }
}
