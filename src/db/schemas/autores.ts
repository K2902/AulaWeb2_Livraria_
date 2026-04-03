import { mssqlTable, int, varchar } from 'drizzle-orm/mssql-core';
import { timestamp as mssqlTimestamp } from 'drizzle-orm/mysql-core';

export const autoresTable = mssqlTable('autores', {
  id: int('id').primaryKey().identity(),
  nome: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  criadoEm: mssqlTimestamp('criado_em').notNull().defaultNow(),
  atualizadoEm: mssqlTimestamp('atualizado_em').notNull().defaultNow(),
});
