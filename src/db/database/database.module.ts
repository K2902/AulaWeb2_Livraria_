import { Global, Module } from '@nestjs/common';
import { DATABASE_URL } from './database.constants';
import { DRIZZLE } from './database.constants';
import { drizzle } from 'drizzle-orm/node-mssql';
//import * as schema from '../schemas';
import { connect } from 'mssql';
import type { config as MsSqlConfig } from 'mssql';
import * as schema from '../schemas/index';

@Global()
//@Global() é um decorator que torna o módulo global, ou seja, ele pode ser usado em qualquer lugar da aplicação
//Se não for global, o módulo só pode ser usado em outros módulos se for importado

//adicionar módulo no app.module.ts: imports: [DatabaseModule]
@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [],
      useFactory: async () => {
        const dbConfig: MsSqlConfig = {
          server: 'SRV-BD-1',
          port: 1433,
          user: 'alunos_des225',
          password: '123',
          database: 'des225_bruno',
          options: {
            encrypt: false,
            trustServerCertificate: true,
          },
        }; //Criando constante com as credenciais

        const pool = await connect(dbConfig);
        return drizzle({ client: pool, schema: schema });
        //importando o objeto {}
      },
    },
  ],
  exports: [DRIZZLE], // exporta o símbolo DRIZZLE para que outros módulos possam usar o drizzle
})
export class DatabaseModule {}
