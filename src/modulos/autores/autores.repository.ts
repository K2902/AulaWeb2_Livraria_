import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import { autoresTabela } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';

@Injectable()
export class AutoresRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarAutores() {
    return this.db.select().from(autoresTabela);
  }
}
