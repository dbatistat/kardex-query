import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ListQuery } from './queries/list.query';

@Injectable()
export class AppService {
  constructor(
    private readonly queryBus: QueryBus) {
  }

  public async getAll() {
    return await this.queryBus.execute(new ListQuery());
  }
}
