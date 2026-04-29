//schema é a estrutura da tabela no banco de dados

//import { sql } from 'drizzle-orm';
import {
  datetime,
  mssqlTable,
  int,
  varchar,
  bit,
} from 'drizzle-orm/mssql-core';
//import { timestamp as mssqlTimestamp } from 'drizzle-orm/mysql-core';

export const autoresTabela = mssqlTable('autores', {
  id: int('id').primaryKey().identity(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  ativo: bit('ativo').notNull().default(true),
  criadoEm: datetime('criado_em').notNull().defaultGetDate(),
  atualizadoEm: datetime('atualizado_em').notNull().defaultGetDate(),
  //criadoEm: mssqlTimestamp('criado_em').notNull().defaultNow(),
  //atualizadoEm: mssqlTimestamp('atualizado_em').notNull().defaultNow(),
});

export type Autor = typeof autoresTabela.$inferSelect;
//vai verificar todas as colunas da tabela autores
export type CriarAutor = typeof autoresTabela.$inferInsert;
//vai verificar todas as colunas da tabela autores para criar um novo autor
